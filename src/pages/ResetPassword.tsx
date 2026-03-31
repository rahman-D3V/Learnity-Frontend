import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ResetPasswordLink = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-richblack-900 h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center  w-127 p-8 gap-6">
        <div className="space-y-3">
          <p className="font-inter  font-semibold text-[30px] text-blue-5">
            Reset your password
          </p>
          <p className="font-inter  font-normal text-[18px] text-richblack-100">
            Have no fear. We’ll email you instructions to reset your password.
            If you dont have access to your email we can try account recovery
          </p>
        </div>

        <div className="space-y-2 w-full">
          <p className="font-inter  font-normal text-[14px] text-blue-5">
            Email Address
          </p>
          <input
            type="text"
            className="rounded-lg p-3 bg-richblack-800 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] w-full font-inter  font-medium  text-[16px] text-blue-5 outline-0"
            placeholder="student@gmail.com"
          />
        </div>

        <div className="w-full space-y-3">
          <button className="font-inter font-medium text-[16px] text-richblack-900 rounded-lg p-3 bg-yellow-50 w-full cursor-pointer">
            Reset Password
          </button>
          <div className="flex gap-3 justify-between">
            <button
              onClick={() => navigate("/login")}
              className="p-3 flex gap-1 font-inter cursor-pointer font-medium text-[16px] text-richblack-5 items-center"
            >
              <IoIosArrowRoundBack size={22} />
              Back to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const checks = {
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z\d]/.test(password),
    length: password.length >= 8,
  };

  const isValid = Object.values(checks).every(Boolean);

  return (
    <div className="bg-richblack-900 h-screen w-screen flex items-center justify-center">
      <div className="w-127 p-8 flex flex-col gap-6">
        <div className="space-y-3 w-full">
          <p className="font-inter font-semibold text-[30px] text-richblack-5">
            Choose new password
          </p>
          <p className="font-inter font-normal text-[18px] text-richblack-100">
            Almost done. Enter your new password and you are all set.
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2 w-full">
            <p className="font-inter  font-normal text-[14px] text-blue-5">
              New password
            </p>
            <input
              type="text"
              className="rounded-lg p-3 bg-richblack-800 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] w-full font-inter  font-medium  text-[16px] text-blue-5 outline-0"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2 w-full">
            <p className="font-inter  font-normal text-[14px] text-blue-5">
              Confirm new password
            </p>
            <input
              type="text"
              className="rounded-lg p-3 bg-richblack-800 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] w-full font-inter  font-medium  text-[16px] text-blue-5 outline-0"
              placeholder="********"
            />
          </div>
        </div>

        <ul className="text-sm space-y-1">
          <li className={checks.lowercase ? "text-green-500" : "text-gray-400"}>
            {checks.lowercase ? "✔" : "○"} one lowercase
          </li>
          <li className={checks.uppercase ? "text-green-500" : "text-gray-400"}>
            {checks.uppercase ? "✔" : "○"} one uppercase
          </li>
          <li className={checks.number ? "text-green-500" : "text-gray-400"}>
            {checks.number ? "✔" : "○"} one number
          </li>
          <li className={checks.special ? "text-green-500" : "text-gray-400"}>
            {checks.special ? "✔" : "○"} one special character
          </li>
          <li className={checks.length ? "text-green-500" : "text-gray-400"}>
            {checks.length ? "✔" : "○"} at least 8 characters
          </li>
        </ul>

        <div className="w-full space-y-3">
          <button className="font-inter font-medium text-[16px] text-richblack-900 rounded-lg p-3 bg-yellow-50 w-full cursor-pointer">
            Reset Password
          </button>
          <button
            onClick={() => navigate("/login")}
            className="p-3 flex gap-1 font-inter cursor-pointer font-medium text-[16px] text-richblack-5 items-center"
          >
            <IoIosArrowRoundBack size={22} />
            Back to login
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

const ResetComplete = () => {
  return (
    <div className="bg-richblack-900 h-screen w-screen flex items-center justify-center">
      <div className="w-127 p-8 flex flex-col gap-6">
        <div className="space-y-3 w-full">
          <p className="font-inter font-semibold text-[30px] text-richblack-5">
            Reset complete!
          </p>
          <p className="font-inter font-normal text-[18px] text-richblack-100">
            All done! We have sent an email to m***********@gmail.com to confirm
          </p>
        </div>

        <div className="w-full space-y-3">
          <button className="font-inter font-medium text-[16px] text-richblack-900 rounded-lg p-3 bg-yellow-50 w-full cursor-pointer">
            Return to login
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export { ResetPassword, ResetPasswordLink, ResetComplete };
