import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-richblack-900 h-screen w-screen ">
      {/* MAIN  */}
      <div className="w-360   mx-auto  ">
        {/* ----FORM---- */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[508px] p-8 space-y-5"
        >
          <div className="space-y-3">
            <p className="font-inter font-semibold text-[30px] text-richblack-5">
              Join the millions learning to code with StudyNotion for free
            </p>
            <p className="font-inter text-richblack-100 font-normal text-[18px] ">
              Build skills for today, tomorrow, and beyond.
              <br />
              <span className="font-edu-sa font-bold text-[16px] text-blue-100">
                Education to future-proof your career.
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="bg-richblack-800 p-1 flex gap-[5px] rounded-[500px] w-[230px] shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]">
            <button className="font-inter font-medium text-[16px] text-richblack-200 rounded-[100px] py-[6px] px-[18px] hover:bg-richblack-900 cursor-pointer">
              Student
            </button>
            <button className="font-inter font-medium text-[16px] text-richblack-200 rounded-[100px] py-[6px] px-[18px] hover:bg-richblack-900 cursor-pointer">
              Instructors
            </button>
          </div>

          {/* Firstname / Lastname */}
          <div className=" flex gap-5">
            <div className="space-y-1.5 text-richblack-200">
              <p className="font-inter font-normal text-[14px] text-richblack-5">
                First Name
              </p>
              <input
                type="text"
                placeholder="Enter first name"
                className="rounded-lg p-3  bg-richblack-800 text-richblack-200 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]  outline-0"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-xs mt-1 text-red-400">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5 text-richblack-200">
              <p className="font-inter font-normal text-[14px] text-richblack-5">
                Last name
              </p>
              <input
                type="text"
                placeholder="Enter last name"
                className="rounded-lg p-3  bg-richblack-800 text-richblack-200 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]  outline-0"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-xs mt-1 text-red-400">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-5">
            <div className="space-y-1.5 text-richblack-200">
              <p className="font-inter font-normal text-[14px] text-richblack-5">
                Email Address
              </p>
              <input
                type="email"
                placeholder="Enter email address"
                className="rounded-lg p-3 w-full bg-richblack-800 text-richblack-200 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]  outline-0"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs mt-1 text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* pasword & confirm passwor */}
          <div className="space-y-1.5 text-richblack-200 flex gap-5 ">
            <div className="space-y-1.5">
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
              )}{" "}
            </div>

            <div className="space-y-1.5">
              <p className="font-inter font-normal text-[14px] text-richblack-5">
                Confirm Password
              </p>
              <div className="flex gap-1 items-center rounded-lg p-3 w-full text-richblack-200 bg-richblack-800 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full outline-0 "
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                  })}
                />{" "}
                {showConfirmPassword ? (
                  <button
                    className="cursor-pointer"
                    onClick={handleShowConfirmPassword}
                  >
                    <IoEye size={18} />
                  </button>
                ) : (
                  <button
                    className="cursor-pointer"
                    onClick={handleShowConfirmPassword}
                  >
                    <IoEyeOff size={18} />
                  </button>
                )}
              </div>
              {errors.confirmPassword && (
                <p className="text-xs mt-1 text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}{" "}
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#FFD60A] w-full shadow-[-2px_-2px_0px_0px_#FFFFFF82_inset] text-richblack-900 rounded-lg px-6 py-3 font-inter font-semibold text-[16px] cursor-pointer"
          >
            Create Account
          </button>

          <p className="text-richblack-300 text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="hover:underline cursor-pointer"
            >
              Login
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};
