import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../components/common/Footer";

const Course = () => {
  return (
    <div className=" w-screen bg-richblack-900 flex flex-col items-center">
      <div className="w-full bg-richblack-800 flex flex-col items-center">
        <div className="w-360 py-8 px-30 gap-6 flex ">
          <div className="w-[870px] space-y-3">
            {/* breadcrumb */}
            <p className="text-amber-400">breadcrumb</p>
            <p className="font-inter font-medium text-[30px]  text-richblack-5">
              Python
            </p>
            <p className="font-inter font-normal text-[14px] text-richblack-200">
              Python is a general-purpose, versatile, and powerful programming
              language. It’s a great first language because Python code is
              concise and easy to read. Whatever you want to do, python can do
              it. From web development to machine learning to data science,
              Python is the language for you.
            </p>
          </div>

          <div className="w-[282px] space-y-3">
            <p className="font-inter font-medium text-[18px] text-richblack-5">
              Related resources
            </p>
            <ul className="font-inter font-normal space-y-2 text-[14px] text-richblack-100">
              <li>Asus</li>
              <li>Pyhton</li>
              <li>Lpu</li>
              <li>Galgotia</li>
              <li>Acer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-319  flex items-center gap-11">
        <div className="w-300 space-y-10">
          <div>
            <p className="font-inter font-semibold text-[30px] text-richblack-5 ">
              Courses to get you started
            </p>
            <p className="text-amber-400">Most Popular</p>
          </div>

          <div className="flex gap-6">
            {courseData.map((data) => (
              <Card />
            ))}
          </div>
        </div>
        <FaArrowCircleRight color="red" size={22} />
      </div>
      <br /> <br /> <br />
      <div className="w-319   flex items-center gap-11">
        <div className="w-300 space-y-10">
          <div>
            <p className="font-inter font-semibold text-[30px] text-richblack-5 ">
              Top courses in Python and Machine Learning
            </p>
          </div>

          <div className="flex gap-6">
            {courseData.map((data) => (
              <Card />
            ))}
          </div>
        </div>
        <FaArrowCircleRight color="red" size={22} />
      </div>
      <br /> <br />
      <Footer />
    </div>
  );
};

export default Course;

const courseData = [
  {
    id: 1,
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    instructor: "John Doe",
    rating: 4.5,
    reviews: 1200,
    price: 1200,
    currency: "Rs",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 2,
    title: "React Frontend Development Masterclass",
    instructor: "Jane Smith",
    rating: 4.7,
    reviews: 980,
    price: 1500,
    currency: "Rs",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 3,
    title: "JavaScript Essentials for Beginners",
    instructor: "Alex Khan",
    rating: 4.3,
    reviews: 750,
    price: 999,
    currency: "Rs",
    badge: "",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

export const Card = () => {
  return (
    <div className="w-[384px] flex flex-col gap-5">
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
        alt=""
        className="rounded-lg"
      />
      <div className="flex flex-col gap-[9px]">
        <p className="font-inter font-medium text-[16px] text-richblack-5">
          The Complete Python Bootcamp From Zero to Hero in Python
        </p>
        <p className="font-inter font-normal  text-[16px] text-richblack-300">
          Name
        </p>
        <p className="text-yellow-400">Start Rating</p>
        <p className="font-inter font-semibold text-[20px] text-richblack-5">
          Rs 1200
        </p>
      </div>
    </div>
  );
};
