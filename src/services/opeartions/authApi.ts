import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";
import { useProfileStore } from "../../store/useProfileStore";
import type { Dispatch, SetStateAction } from "react";
import type { NavigateFunction } from "react-router-dom";
import { useCatalogStore } from "../../store/useCatalogStore";

export async function getResetPasswordToken(
  email: string,
  setSentEmail: (value: boolean) => void,
) {
  const { setLoading } = useAuthStore.getState(); // Later-On

  try {
    setLoading(true);
    const response = await apiConnector(
      "POST",
      authEndpoints.resetPasswordTokenApi,
      { email },
    );
    console.log("Resonse after hitting api", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    // make toast --> EMail sent successfully
    toast.success("Email sent successfully");
    setSentEmail(true);
  } catch (error) {
    console.log("Error", error);

    toast.error("Failed to send email for resetting password");
  } finally {
    setLoading(false);
  }
}

export async function resetPassword(
  password: string,
  confirmPassword: string,
  token: string,
) {
  const { setLoading } = useAuthStore.getState(); // Later-On

  try {
    setLoading(true);

    const response = await apiConnector(
      "POST",
      authEndpoints.resetPasswordApi,
      { password, confirmPassword, token },
    );

    console.log("RESET Password RESPONSE ... ", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Password Reset Successfully");
  } catch (error) {
    console.log(error);

    toast.error("Unable to reset password");
  } finally {
    setLoading(false);
  }
}

export async function sendOTP(
  email: string,
  setOtpSent: Dispatch<SetStateAction<boolean>>,
) {
  const { setLoading } = useAuthStore.getState();
  try {
    setLoading(true);

    const response = await apiConnector("POST", authEndpoints.sendOtpApi, {
      email,
    });

    console.log("SENDOTP API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("OTP send successfully");
    setOtpSent(true);
  } catch (error) {
    console.log("SENDOTP API ERROR............", error);
    toast.error("Could Not Send OTP");
  } finally {
    setLoading(false);
  }
}

export async function signUp(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  accountType: string,
  otp: string,
  navigate: NavigateFunction,
) {
  const { setLoading } = useAuthStore.getState();
  try {
    setLoading(true);

    const response = await apiConnector("POST", authEndpoints.signUpApi, {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      otp,
    });

    console.log("SIGNUP API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("SignUp successfully");
    navigate("/login");
  } catch (error) {
    toast.error("Cannot Sign up");
    console.log("SIGNUP API ERROR............", error);
    navigate("/signup");
  } finally {
    setLoading(false);
  }
}

export async function signIn(
  email: string,
  password: string,
  navigate: NavigateFunction,
) {
  const { setLoading, setToken } = useAuthStore.getState();
  const { setUser } = useProfileStore.getState();

  try {
    setLoading(true);

    const response = await apiConnector("POST", authEndpoints.loginApi, {
      email,
      password,
    });

    console.log("Login API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Login Successful");

    setToken(response.data.token);
    setUser(response.data.user);

    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));

    navigate("/dashboard/my-profile");
  } catch (error) {
    toast.error("Can't login, Try again");
    console.log("Error while login...", error);
  } finally {
    setLoading(false);
  }
}

export function logout(navigate: NavigateFunction) {
  const { setToken } = useAuthStore.getState();
  const { setUser } = useProfileStore.getState();
  const { setCategoryId, setCategoryName } = useCatalogStore.getState();

  setToken(null);
  setUser(null);
  setCategoryName(null);
  setCategoryId(null);
  // reset cart - later
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  toast.success("Logout Successful");
  navigate("/");
}

export async function changePassword(
  currentPassword: string,
  newPassword: string,
  navigate: NavigateFunction,
  setIsPasswordChanging: Dispatch<SetStateAction<boolean>>,
) {
  const { token } = useAuthStore.getState();
  try {
    setIsPasswordChanging(true);
    const response = await apiConnector(
      "POST",
      authEndpoints.chagePasswordApi,
      { currentPassword, newPassword },
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Password changed successfully");
    navigate("/dashboard/my-profile");
  } catch (error) {
    toast.error("Failed to changed Password");
    console.log(error);
  } finally {
    setIsPasswordChanging(false);
  }
}

// export async function getUserDetails() {
//   const response = await apiConnector("GET",profileEndpoints.getUserDetails)
//   console.log(response)
// }

// type SignUpParams = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   accountType: string;
//   otp: string;
//   navigate: NavigateFunction;
// };
