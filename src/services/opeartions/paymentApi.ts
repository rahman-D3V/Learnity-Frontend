import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import { useProfileStore } from "../../store/useProfileStore";
import { paymentEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import type { NavigateFunction } from "react-router-dom";

// ✅ Load Razorpay script (with caching)
let razorpayLoaded = false;

function loadScript(src: string) {
  return new Promise((resolve) => {
    if (razorpayLoaded) return resolve(true);

    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      razorpayLoaded = true;
      resolve(true);
    };

    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}

// MAIN FUNCTION
export async function buyCourse(courses: string[], navigate: NavigateFunction) {
  const toastId = toast.loading("Preparing payment...");
  const { token } = useAuthStore.getState();
  const { user } = useProfileStore.getState();

  try {
    // 1. Load Razorpay SDK
    const sdkLoaded = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js",
    );

    if (!sdkLoaded) {
      toast.error("Failed to load payment gateway");
      return;
    }

    // 2. Create order from backend
    const orderResponse = await apiConnector(
      "POST",
      paymentEndpoints.coursePayment,
      { courses },
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!orderResponse?.data?.success) {
      throw new Error(orderResponse?.data?.message || "Order creation failed");
    }

    const order = orderResponse.data.order;

    // 3. Razorpay options
    const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
      // key: 'RAZORPAY_KEY', // ⚠️ IMPORTANT-----------------------------
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,

      name: "Learnity",
      description: "Course Purchase",
      image:
        "https://ik.imagekit.io/snecnlsaq/Learnity/WhatsApp_Image_2024-04-02_at_3.45.59_PM_ulSeF3pEd.jpeg",

      prefill: {
        name: user?.firstName,
        email: user?.email,
      },

      handler: function (response: RazorpayResponseType) {
        console.log("PAYMENT SUCCESS-----:", response);
        // 4. On success
        // sendPaymentSuccessEmail(response, order.amount, token);
        verifyPayment(
          { ...response, courses }, // ⚠️ still not fully secure (backend should validate)
          token as string,
          navigate,
        );
      },
    };

    // 4. Open Razorpay
    // const paymentObject = new window.Razorpay(options); // it is giving TS error

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();

    // 5. Failure handler
    paymentObject.on("payment.failed", function () {
      toast.error("Payment failed");
    });
  } catch (error) {
    console.error("PAYMENT ERROR:", error);
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Payment failed");
    }
  } finally {
    toast.dismiss(toastId);
  }
}

// Send success email
// async function sendPaymentSuccessEmail(response, amount, token) {
//   try {
//     await apiConnector(
//       "POST",
//       SEND_PAYMENT_SUCCESS_EMAIL_API,
//       {
//         orderId: response.razorpay_order_id,
//         paymentId: response.razorpay_payment_id,
//         amount,
//       },
//       {
//         Authorization: `Bearer ${token}`,
//       }
//     );
//   } catch (error) {
//     console.log("EMAIL ERROR:", error);
//   }
// }

// Verify payment
async function verifyPayment(
  bodyData: BodyDataType,
  token: string,
  navigate: NavigateFunction,
) {
  const toastId = toast.loading("Verifying payment...");
  //   dispatch(setPaymentLoading(true));

  try {
    const response = await apiConnector(
      "POST",
      paymentEndpoints.verifyCoursePayment,
      bodyData,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response?.data?.success) {
      throw new Error(response?.data?.message || "Verification failed");
    }

    toast.success("Payment successful. You are enrolled.");
    // dispatch(resetCart());
    navigate("/dashboard/enrolled-courses");
  } catch (error) {
    console.error("VERIFY ERROR:", error);
    toast.error("Payment verification failed");
  } finally {
    toast.dismiss(toastId);
    // dispatch(setPaymentLoading(false));
  }
}

type RazorpayResponseType = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type BodyDataType = RazorpayResponseType & {
  courses: string[];
};
