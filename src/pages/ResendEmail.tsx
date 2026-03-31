import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ResendEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-richblack-900 h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center  w-127 p-8 gap-6">
        <div className="space-y-3">
          <p className="font-inter  font-semibold text-[30px] text-blue-5">
            Check email
          </p>
          <p className="font-inter  font-normal text-[18px] text-richblack-100">
            We have sent the reset email to youremailaccount@gmail.com
          </p>
        </div>

        <div className="w-full space-y-3">
          <button className="font-inter font-medium text-[16px] text-richblack-900 rounded-lg p-3 bg-yellow-50 w-full cursor-pointer">
            Resend Email
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

export default ResendEmail;
