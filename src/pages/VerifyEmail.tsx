import { useRef, useState } from "react";
import { CiTimer } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

    const navigate = useNavigate()

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // 👉 move to next input
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // 👉 go back on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="bg-richblack-900 h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center  w-127 p-8 gap-6">


        <div className="space-y-3">
          <p className="font-inter font-semibold text-[30px] text-richblack-5">
            Verify email
          </p>
          <p className="font-inter font-normal text-[18px] text-richblack-100">
            A verification code has been sent to you. Enter the code below
          </p>
        </div>

        {/* OTP-INPUT FIELD */}
        <div className="flex gap-6 justify-between">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              maxLength={1}
              placeholder="-"
              className="w-12 h-12 text-center text-xl text-white bg-slate-800 rounded-lg border-2 border-transparent outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 placeholder:text-slate-400"
            />
          ))}
        </div>

        <div className="w-full space-y-3">
            <button className="font-inter font-medium text-[16px] text-richblack-900 rounded-lg p-3 bg-yellow-50 w-full">Verify and Register</button>
            <div className="flex gap-3 justify-between">
                <button onClick={() => navigate("/login")} className="p-3 flex gap-1 font-inter cursor-pointer font-medium text-[16px] text-richblack-5 items-center"><IoIosArrowRoundBack size={22}/>Back to login</button>
                <button className="p-3 flex gap-1 font-inter cursor-pointer font-medium text-[16px] text-blue-100 items-center"><CiTimer  size={22}/>Resend it</button>
                
            </div>
        </div>


      </div>
    </div>
  );
};

export default VerifyEmail;
