import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../../../assets/Images/banner.mp4";
import { MdOutlinePlayLesson } from "react-icons/md";
import Button from "./Button";
import CodeBlock from "./CodeBlock";
import CodeBlock2 from "./CodeBlock2";

const Section1 = () => {
  return (
    <div className=" w-[1440px] relative mx-auto flex flex-col   items-center text-white justify-between ">
      {/* Section-1.1 */}
      <div className="flex flex-col gap-9 items-center mt-16 md:mt-31">
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-2 rounded-[500px] bg-[#161D29] text-[#999DAA] p-1 w-[235px] h-11 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]">
            <p className="text-richblack-200 font-inter font-medium text-[16px]">
              Become an Instructor
            </p>
            <HiMiniArrowSmallRight />
          </div>
        </Link>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[#F1F2FF] font-inter font-medium text-[24px] md:text-[36px]">
            Empower Your Future with{" "}
            <span className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
              Coding Skills
            </span>
          </p>

          <p className="text-richblack-300 font-medium text-[14px] md:text-[16px] text-center max-w-2xl">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[38px]">
          <Button arrow={false} color="yellow" content="Learn More" />
          <Button arrow={false} color="black" content="Book a Demo" />
        </div>
      </div>

      {/* Section-1.2 */}
      <div className="shadow-[20px_20px_0px_0px_#F5F5F5] w-full max-w-[1135px] aspect-video mt-10">
        <video
          className="w-full h-full object-fill"
          src={banner}
          autoPlay
          loop
          muted
        />
      </div>

      {/* Section-1.3 */}
      <div className="  mt-10   w-full py-[90px]  flex px-30 justify-center">
        <div className="  space-y-3 md:w-[50%]">
          <p className="font-inter font-semibold text-[28px] md:text-[36px] text-[#F1F2FF] leading-[44px]">
            Unlock your{" "}
            <span className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
              coding potential
            </span>
            <br />
            with our online courses.
          </p>

          <p className="font-inter font-medium text-[16px] text-[#838894] leading-6 max-w-sm">
            Our courses are designed and taught by industry experts who have
            years of experience in coding and are passionate about sharing their
            knowledge with you.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-8">
            <Button arrow={true} color="yellow" content="Try it Yourself" />
            <Button arrow={false} color="black" content="Learn More" />
          </div>
        </div>

        <div className="space-y-3 md:w-[50%]">
          <CodeBlock />
        </div>
      </div>

      {/* Section-1.4 */}
      <div className="flex  w-full px-30 gap-20">
        <div className="space-y-3 md:w-[50%] -ml-10">
          <CodeBlock2 />
        </div>

        <div className="space-y-3 md:w-[50%]">
          <p className="font-inter font-semibold text-[28px] md:text-[36px] text-[#F1F2FF] leading-[44px]">
            Start{" "}
            <span className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
              coding <br /> in seconds
            </span>
          </p>

          <p className="font-inter font-medium text-[16px] text-[#838894] leading-6 max-w-sm">
            Go ahead, give it a try. Our hands-on learning environment means
            you'll be writing real code from your very first lesson.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-8">
            <Button arrow={true} color="yellow" content="Continue Lesson" />
            <Button arrow={false} color="black" content="Learn More" />
          </div>
        </div>
      </div>

      {/* Section-1.5 -->  Course Cards Section */}
      <div className="w-full flex flex-col gap-9 items-center z-20 py-12 mt-20">
        <div className="space-y-2 text-center">
          <p className="font-inter font-semibold text-[36px] leading-11 text-richblack-5">
            Unlock the{" "}
            <span className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
              Power of Code
            </span>
          </p>
          <p className="font-inter font-medium text-[16px] text-richblack-300">
            Learn to Build Anything You Can Imagine
          </p>
        </div>

        <div className="flex gap-9 px-13 pt-8 ">
          {/* Card-1 */}
          <div className="bg-[#FFFFFF] relative shadow-[12px_12px_0px_0px_#FFD60A] w-[340px] h-[300px] ">
            <div className="pt-8 pb-13 px-6 space-y-3">
              <p className="font-inter font-semibold text-[20px] leading-7 text-richblack-800">
                Learn HTML
              </p>
              <p className="font-inter font-normal text-[16px] leading-6 text-richblack-500">
                This course covers the basic concepts of HTML including creating
                and structuring web pages, adding text, links, images, and more.
              </p>
            </div>
            <div className="py-4  absolute w-full bottom-0  px-6 border-t border-dashed border-richblack-50 justify-between i flex gap-4">
              <button className="flex items-center gap-2 font-inter font-medium text-[16px] leading-6 text-[#0A5A72]">
                <FaRegUser />
                Beginner
              </button>
              <button className="flex items-center gap-2 font-inter font-medium text-[16px] leading-6 text-[#0A5A72]">
                <MdOutlinePlayLesson />6 Lessons
              </button>
            </div>
          </div>

          {/* Card-2 */}
          <div className="relative bg-richblack-800 w-[340px] h-[300px]">
            <div className="pt-8 pb-13 px-6 space-y-3">
              <p className="font-inter font-semibold text-[20px] leading-7 text-richblack-25">
                Learn CSS
              </p>
              <p className="font-inter font-normal text-[16px] leading-6 text-richblack-400">
                This course explores advanced topics in HTML5 and CSS3,
                including animations, transitions, and layout techniques
              </p>
            </div>
            <div className=" absolute w-full bottom-0 py-4 px-6 border-t border-dashed border-richblack-50 flex justify-between gap-4">
              <button className="flex items-center gap-2 font-inter font-medium text-[16px] leading-6 text-richblack-300">
                <FaRegUser />
                Beginner
              </button>
              <button className="flex items-center gap-2 font-inter font-medium text-[16px] leading-6 text-richblack-300">
                <MdOutlinePlayLesson />6 Lessons
              </button>
            </div>
          </div>

          {/* Card-3 */}
          <div className="relative bg-richblack-800 w-[340px] h-[300px]">
            <div className="pt-8 pb-13 px-6 space-y-3">
              <p className="font-inter font-semibold text-[20px] leading-7 text-richblack-25">
                Responsive Web design
              </p>
              <p className="font-inter font-normal text-[16px] leading-6 text-richblack-400">
                This course teaches responsive web design techniques, allowing
                web pages to adapt to different devices and screen sizes
              </p>
            </div>
            <div className=" absolute w-full bottom-0 py-4 px-6 border-t border-dashed border-richblack-50 flex justify-between gap-4">
              <button className="flex items-center gap-2 font-inter font-medium text-[16px] leading-6 text-richblack-300">
                <FaRegUser />
                Beginner
              </button>
              <button className="flex items-center gap-2 font-inter font-medium text-[16px] leading-6 text-richblack-300">
                <MdOutlinePlayLesson />6 Lessons
              </button>
            </div>
          </div>
        </div>

        {/* Explore Full Catalog */}
        <div className="flex flex-wrap justify-center pt-8 gap-6">
          <button className="rounded-lg py-[12px] px-[24px] bg-yellow-50 font-inter font-bold text-[16px] text-richblack-900 flex items-center gap-2 cursor-pointer">
            Explore Full Catalog <HiMiniArrowSmallRight />
          </button>
          <button className="bg-richblack-800 rounded-lg px-6 py-3 shadow-[-2px_-2px_0px_0px_#FFFFFF2E_inset] font-inter font-bold text-[16px] text-richblack-5 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* <div className="bg-white h-100 w-full absolute bottom-0 z-10"></div> */}
    </div>
  );
};

export default Section1;
