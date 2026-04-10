import { FaCode, FaGraduationCap } from "react-icons/fa";
import TimelineImage from "../../../assets/Images/TimelineImage.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import { GiPoliceBadge } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import Button from "./Button";

const Section2 = () => {
  return (
    <div className="w-11/12 bg-pure-greys-5 relative">
      {/* TOP-DIV  --> SECTION 2.1*/}
      <div className="py-15 flex flex-col gap-13 items-center relative">
        {/*  SECTION 2.1.1*/}
        <div className="flex gap-3  w-[1200px]">
          <p className="font-inter w-[50%] font-semibold text-[36px] text-richblack-900">
            Get the skills you need for a{" "}
            <span className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
              job that is in demand.
            </span>
          </p>
          <div className="flex flex-col gap-3 w-[50%]">
            <p className="font-inter font-medium text-[16px] text-richblack-700">
              The modern Learnity is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </p>
            <div className="pt-9">
              <Button arrow={false} color="yellow" content="Learn More" />
            </div>
          </div>
        </div>

        {/*  SECTION 2.1.2*/}
        <div className="w-300 flex gap-19 ">
          <div className="flex flex-col w-[410px] gap-8">
            <div className="w-full py-4 px-3 gap-6 flex">
              <div className="h-[52px] w-13 rounded-[200px] p-1 gap-1 bg-white flex items-center justify-center">
                {" "}
                <GiPoliceBadge className="text-2xl text-blue-200" />{" "}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-inter font-semibold text-[18px] text-richblack-800">
                  Leadership
                </p>
                <p className="font-inter font-normal text-[14px] text-richblack-700">
                  Fully committed to the success company
                </p>
              </div>
            </div>

            <div className="w-full py-4 px-3 gap-6 flex">
              <div className="h-[52px] w-13 rounded-[200px] p-1 gap-1 bg-white flex items-center justify-center">
                {" "}
                <FaGraduationCap className="text-2xl text-pink-200" />{" "}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-inter font-semibold text-[18px] text-richblack-800">
                  Responsibility
                </p>
                <p className="font-inter font-normal text-[14px] text-richblack-700">
                  Students will always be our top priority
                </p>
              </div>
            </div>

            <div className="w-full py-4 px-3 gap-6 flex">
              <div className="h-[52px] w-13 rounded-[200px] p-1 gap-1 bg-white flex items-center justify-center">
                {" "}
                <IoDiamond className="text-2xl text-caribbeangreen-200" />{" "}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-inter font-semibold text-[18px] text-richblack-800">
                  Flexibility
                </p>
                <p className="font-inter font-normal text-[14px] text-richblack-700">
                  The ability to switch is an important skills
                </p>
              </div>
            </div>

            <div className="w-full py-4 px-3 gap-6 flex">
              <div className="h-[52px] w-13 rounded-[200px] p-1 gap-1 bg-white flex items-center justify-center">
                {" "}
                <FaCode className="text-2xl text-yellow-100" />{" "}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-inter font-semibold text-[18px] text-richblack-800">
                  Solve the problem
                </p>
                <p className="font-inter font-normal text-[14px] text-richblack-700">
                  Code your way to a solution
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <img src={TimelineImage} alt="" />
            <div className="h-[128px] w-[511px] bg-caribbeangreen-700 flex p-[42px] gap-[52px] mx-auto relative bottom-16">
              <div className="flex gap-6 items-center">
                <p className="font-inter font-bold text-[36px] text-white">
                  10
                </p>
                <p className="font-inter font-medium text-[14px] text-caribbeangreen-300">
                  YEARS EXPERIENCES
                </p>
              </div>
              <div className="border border-caribbeangreen-500"></div>
              <div className="flex gap-6 items-center">
                <p className="font-inter font-bold text-[36px] text-white">
                  250
                </p>
                <p className="font-inter font-medium text-[14px] text-caribbeangreen-300">
                  TYPES OF COURSES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM-DIV --> SECTION 2.2*/}
      <div className="flex flex-col gap-[52px] py-[90px]  bg-pure-greys-5 items-center">
        {/* SECTION 2.2.1*/}

        <div className="w-[1200px] px-[220px] flex flex-col gap-3 items-center text-center">
          <p className="font-inter font-semibold text-[36px] text-richblack-900">
            Your swiss knife for learning any language
          </p>
          <p className="font-inter font-medium text-[16px] text-richblack-700">
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </p>
        </div>

        {/* SECTION 2.2.2*/}

        <div className="flex  items-center pl-10 ">
          <img
            src={knowYourProgress}
            className="  relative left-25 z-0"
            alt=""
          />
          <img src={compareWithOthers} className="  z-10" alt="" />
          <img
            src={planYourLessons}
            className=" relative right-35 z-20"
            alt=""
          />
        </div>

        {/* SECTION 2.2.3*/}
        <div>
          <Button arrow={false} color="yellow" content="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
