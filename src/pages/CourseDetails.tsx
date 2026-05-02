import { IoMdInformationCircleOutline } from "react-icons/io";
import Footer from "../components/common/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCourseDetails } from "../services/opeartions/courseApi";
import { formatDate } from "../services/formatDate";
import { buyCourse } from "../services/opeartions/paymentApi";

const CourseDetails = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState();
  const navigate = useNavigate();

  async function handleBuyCourse() {
    if (courseId) {
      const result = await buyCourse([courseId], navigate);
    }
  }

  useEffect(() => {
    async function getCourseDetails() {
      const res = await fetchCourseDetails(courseId!);
      console.log(res);
      
      if (res) {
        console.log(res);
        setCourse(res);
      }
    }
    getCourseDetails();
  }, []);

  return (
    <div className="bg-richblack-900 min-h-screen ">
      <div className="bg-richblack-800 ">
        <div className="w-360 bg-richblack-800 text-white flex  justify-between mx-auto py-8 px-30 relative">
          <div className="space-y-3 w-[768px]">
            <p>Home / Learning / Python</p>
            <p className="font-[inter] font-medium text-[30px] text-richblack-5">
              {course?.courseName}
            </p>
            <p className="font-[inter] font-normal  text-[14px] text-richblack-200">
              {course?.courseDescription}
            </p>
            <p>Rating</p>
            <p className="font-[inter] font-normal text-[16px] text-richblack-25">
              Created by{" "}
              {course?.instructor.firstName + " " + course?.instructor.lastName}
            </p>
            <p className="font-[inter] font-normal text-[16px] text-richblack-25 flex items-center gap-1">
              {" "}
              <IoMdInformationCircleOutline size={20} />
              Created At {formatDate(course?.createdAt).slice(0, -9)}
            </p>
          </div>

          <div className="w-[384px] bg-richblack-700 absolute right-27">
            <img
              className="w-[384px] h-[201px] object-cover  "
              src={course?.thumbnail}
              alt=""
            />

            <div className="w-[384px] space-y-4 p-6">
              <p className="font-[inter] font-bold  text-[30px] text-richblack-5">
                Rs. {course?.price}
              </p>
              <button className="bg-[#FFD60A] shadow-[-2px_-2px_0px_0px_#FFFFFF82_inset] text-[#000814] rounded-lg px-6 py-3 font-inter font-medium text-[16px] cursor-pointer w-full">
                Add to Cart
              </button>
              <button
                onClick={handleBuyCourse}
                className="bg-[#161D29] rounded-lg px-6 py-3 shadow-[-2px_-2px_0px_0px_#FFFFFF2E_inset] font-inter font-medium text-[16px] text-[#F1F2FF]  cursor-pointer w-full"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white w-360 mx-auto px-30">
        <div className="space-y-4 w-[792px]">
          <p>Author</p>
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src="https://ik.imagekit.io/snecnlsaq/Learnity/shah-rukh-khan-gq-pensive-pose-pf5bzfte1027dcgk_XTFhK0yZP.webp"
              alt=""
            />
            <p>
              {course?.instructor.firstName + " " + course?.instructor.lastName}
            </p>
          </div>
          <p className="font-[inter] font-normal  text-[14px] text-richblack-200">
            {course?.instructor?.additionalDetails?.about}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;
