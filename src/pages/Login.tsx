import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signIn } from "../services/opeartions/authApi";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const loading = useAuthStore((s) => s.loading);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    const { email, password } = data;
    signIn(email, password, navigate);
  };

  return (
    <div className="bg-richblack-900 h-screen w-screen ">
      {/* MAIN  */}
      <div className="w-360   mx-auto  ">
        {/* ----FORM---- */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[508px] p-8 space-y-5 "
        >
          <div className="space-y-3">
            <p className="font-inter font-semibold text-[30px] text-richblack-5">
              Welcome Back
            </p>
            <p className="font-inter text-richblack-100 font-normal text-[18px] ">
              Build skills for today, tomorrow, and beyond.
              <br />
              <span className="font-edu-sa font-bold text-[16px] text-blue-100">
                Education to future-proof your career.
              </span>
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-1.5 text-richblack-200">
              <p className="font-inter font-normal text-[14px] text-richblack-5">
                Email Address
              </p>
              <input
                type="email"
                placeholder="Enter email address"
                className="rounded-lg p-3 w-full bg-richblack-800 text-richblack-200 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]  outline-0"
                {...register("email", { required: "Email is required" })}
              />

              {errors.email && (
                <p className="text-xs mt-1 text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5 text-richblack-200">
              <p className="font-inter font-normal text-[14px] text-richblack-5">
                Password
              </p>
              <div className="flex gap-1 items-center rounded-lg p-3 w-full text-richblack-200 bg-richblack-800 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full outline-0 "
                  {...register("password", {
                    required: "Password is required",
                  })}
                />{" "}
                {showPassword ? (
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={handleShowPassword}
                  >
                    <IoEye size={18} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={handleShowPassword}
                  >
                    <IoEyeOff size={18} />
                  </button>
                )}
              </div>
              {errors.password && (
                <p className="text-xs mt-1 text-red-400">
                  {errors.password.message}
                </p>
              )}
              <p
                onClick={() => navigate("/reset-password-link")}
                className="font-inter font-normal text-[12px] text-blue-100 text-end hover:underline cursor-pointer"
              >
                Forgot password
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#FFD60A] w-full shadow-[-2px_-2px_0px_0px_#FFFFFF82_inset] text-richblack-900 rounded-lg px-6 py-3 font-inter font-semibold text-[16px] cursor-pointer"
          >
            {loading ? "Loading..." : "Sign in"}
          </button>
          <p className="text-richblack-300 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="hover:underline cursor-pointer"
            >
              Sign up
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

type FormValues = {
  email: string;
  password: string;
};
