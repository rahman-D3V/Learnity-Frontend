import { FaArrowCircleRight, FaStar } from "react-icons/fa";
import Footer from "../components/common/Footer";
import { useEffect, useState } from "react";
import { useCatalogStore } from "../../src/store/useCatalogStore";
import { getCategoryDetails } from "../services/opeartions/courseApi";

const Course = () => {
  const categoryName = useCatalogStore((s) => s.categoryName);
  const categoryDescription = useCatalogStore((s) => s.categoryDescription);
  const [selected, setSelected] = useState<SelectedType[]>([]);

  useEffect(() => {
    // console.log("hahhhhhhhhhh",name);
    async function fetchCategoryDetails() {
      const result = await getCategoryDetails();
      if (result) {
        console.log(result.selectedCateory.courses, "-----------");
        setSelected(result.selectedCateory.courses);
      }
    }
    fetchCategoryDetails();
  }, [categoryName]);

  return (
    <div className="w-screen bg-richblack-900 flex flex-col items-center">
      {/* Hero Banner */}
      <div className="w-full bg-richblack-800 flex flex-col items-center border-b border-richblack-700">
        <div className="w-full max-w-[1200px] py-12 px-8">
          {/* Breadcrumb */}
          <p className="text-sm text-richblack-400 mb-4">
            Home&nbsp; /&nbsp; Catalog&nbsp; /&nbsp;&nbsp;
            <span className="text-amber-400 font-medium">{categoryName}</span>
          </p>

          <div className="w-[720px] space-y-4">
            <p className="font-inter font-semibold text-[32px] text-richblack-5 leading-tight">
              {categoryName}
            </p>
            <p className="font-inter font-normal text-[15px] text-richblack-200 leading-relaxed">
              {categoryDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Courses to get you started */}
      <div className="w-full max-w-[1200px] px-8 py-12">
        <div className="space-y-8">
          <p className="font-inter font-semibold text-[24px] text-richblack-5">
            Courses to get you started
          </p>

          <div className="flex items-center gap-6 ">
            <div className="flex gap-6 flex-1 overflow-x-auto">
              {selected.map((data:SelectedType) => (
                <div>
                  <Card
                    img={data.thumbnail}
                    courseName={data.courseName}
                    price={data.price}
                  />
                </div>
              ))}
            </div>
            <FaArrowCircleRight color="red" size={22} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-[1200px] px-8">
        <div className="border-t border-richblack-700" />
      </div>

      {/* Top courses in category */}
      <div className="w-full max-w-[1200px] px-8 py-12">
        <div className="space-y-8">
          <p className="font-inter font-semibold text-[24px] text-richblack-5">
            Top courses in {categoryName}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-6 flex-1">
              {courseData.map((data) => (
                <Card />
              ))}
            </div>
            <FaArrowCircleRight color="red" size={22} />
          </div>
        </div>
      </div>

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

export const Card = ({
  img,
  price,
  courseName,
}: {
  img: string;
  price: number;
  courseName: string;
}) => {
  return (
    <div className="w-[280px] flex flex-col bg-richblack-800 border border-richblack-700 rounded-2xl overflow-hidden hover:border-richblack-600 hover:shadow-lg hover:shadow-black/30 transition-all cursor-pointer">
      <img
        src={img}
        alt={courseName}
        className="w-full h-[160px] object-cover"
      />

      <div className="flex flex-col gap-2 px-4 py-4">
        <p className="font-inter font-semibold text-[15px] text-richblack-5 line-clamp-2 leading-snug">
          {courseName}
        </p>

        <div className="flex items-center gap-0.5">
          <FaStar className="text-yellow-400 text-sm" />
          <FaStar className="text-yellow-400 text-sm" />
          <FaStar className="text-yellow-400 text-sm" />
          <FaStar className="text-yellow-400 text-sm" />
          <FaStar className="text-yellow-400 text-sm" />
        </div>

        <p className="font-inter font-bold text-[16px] text-richblack-5">
          ₹ {price}
        </p>
      </div>
    </div>
  );
};


type SelectedType = {
  _id: string;
  courseName: string;
  courseDescription: string;
  price: number;
  thumbnail: string;
  ratingAndReviews: unknown[]; // or define proper type if you know structure
};