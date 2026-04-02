import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";
import { useProfileStore } from "../../store/useProfileStore";
import type { Dispatch, SetStateAction } from "react";

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
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  accountType,
  otp,
  navigate,
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

export async function signIn(email, password, navigate) {
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

    navigate("/test");
  } catch (error) {
    toast.error("Can't login, Try again");
    console.log("Error while login...", error);
  } finally {
    setLoading(false);
  }
}

export function logout(navigate: (path: string) => void) {
  const { setToken } = useAuthStore.getState();
  const { setUser } = useProfileStore.getState();

  setToken(null);
  setUser(null);
  // reset cart - later
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  toast.success("Logout Successful");
  navigate("/");
}

type SignUpParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  otp: string;
  navigate: (path: string) => void;
};

type SignInParams = {
  email: string;
  password: string;
  navigate: (path: string) => void;
};
