import instructor from "../../../assets/Images/Instructor.png";
import Button from "./Button";

const Section3 = () => {
  return (
    <div className="bg-richblack-900">
      {/* TOP */}
      <div className="w-[1440px]  flex items-center gap-[98px] py-[90px] px-[120px]  ">
        <img
          src={instructor}
          alt=""
          className="w-[500px] shadow-[-20px_-20px_0px_0px_#FFFFFF]"
        />
        <div className="flex flex-col gap-3 w-[486px]">
          <p className="font-inter font-semibold text-[36px] text-richblack-5 leading-11">
            Become an <br /> instructor
          </p>
          <p className="font-inter font-medium text-[16px] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="pt-13">
            <Button
              arrow={true}
              color="yellow"
              content="Start Teaching Today"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="py-[90px] px-30 flex flex-col gap-13 items-center">
        <p className="font-inter font-semibold text-[36px] text-richblack-5">
          Reviews from other learners
        </p>

        {/* REVIEW SLIDER */}
        <div></div>
      </div>
    </div>
  );
};

export default Section3;
