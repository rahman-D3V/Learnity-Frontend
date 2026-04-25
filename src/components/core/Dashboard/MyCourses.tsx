import { useEffect, useState } from "react";
import {
  deleteCourse,
  getInstructorCourses,
} from "../../../services/opeartions/courseApi";
import { useNavigate } from "react-router-dom";
import { useCourseStore } from "../../../store/useCourseStore";
import { formatDate } from "../../../services/formatDate";

const MyCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate = useNavigate();
  const setCourse = useCourseStore((s) => s.setCourse);
  const course = useCourseStore((s) => s.course);

  function handleNavigate() {
    navigate("/dashboard/add-course");
  }

  async function handleDelete(courseId: string) {
    const res = await deleteCourse(courseId);
    if (res) {
      setCourse(res);
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await getInstructorCourses();
      if (res) {
        setCourses(res);
        console.log(res);
      }
    }
    getData();
  }, [course]);

  return (
    <div className="text-white w-full px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">My Courses</h1>
          <p className="text-sm text-richblack-300 mt-1">
            {courses?.length ?? 0} courses created
          </p>
        </div>
        <button
          onClick={handleNavigate}
          className="flex items-center gap-2 text-sm font-semibold text-black bg-yellow-50 hover:bg-yellow-100 transition-colors px-4 py-2.5 rounded-xl"
        >
          Add Course
          <span className="text-base leading-none">+</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-richblack-800 border border-richblack-700 rounded-2xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[2fr_0.5fr_0.5fr_0.5fr] bg-richblack-700 px-5 py-3 border-b border-richblack-600">
          <p className="text-xs font-bold uppercase tracking-widest text-richblack-300">
            Courses
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-richblack-300">
            Duration
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-richblack-300">
            Price
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-richblack-300">
            Actions
          </p>
        </div>

        {/* Table Rows */}
        {courses?.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[2fr_0.5fr_0.5fr_0.5fr] items-center px-5 py-4 border-b border-richblack-700 last:border-b-0 hover:bg-richblack-700/50 transition-colors"
          >
            {/* Course Info */}
            <div className="flex gap-4 items-center pr-4">
              <img
                className="w-[150px] h-[100px] rounded-lg object-cover shrink-0"
                src={item.thumbnail}
                alt={item.courseName}
              />
              <div className="space-y-1 min-w-0">
                <p className="text-sm font-semibold text-richblack-5 line-clamp-1">
                  {item.courseName}
                </p>
                <p className="text-xs text-richblack-300 line-clamp-2 leading-relaxed">
                  {item.courseDescription}
                </p>
                <p className="text-xs text-richblack-400">
                  {formatDate(item.createdAt)}
                </p>
              </div>
            </div>

            {/* Duration */}
            <p className="text-sm text-richblack-100">20h 10m</p>

            {/* Price */}
            <p className="text-sm font-semibold text-richblack-5">
              ₹{item.price}
            </p>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(item._id)}
                className="text-xs font-medium text-pink-200 border border-pink-400/20 bg-pink-400/5 hover:bg-pink-400/15 transition-colors px-3 py-1.5 rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/dashboard/edit-course/${item._id}`)}
                className="text-xs font-medium text-pink-200 border border-pink-400/20 bg-pink-400/5 hover:bg-pink-400/15 transition-colors px-3 py-1.5 rounded-lg"
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        {/* Empty state */}
        {(!courses || courses.length === 0) && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-richblack-300 text-sm font-medium">
              No courses yet
            </p>
            <p className="text-richblack-500 text-xs mt-1">
              Click "Add Course" to create your first course
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;

export interface Course {
  _id: string;
  courseName: string;
  courseDescription: string;
  thumbnail: string;
  price: number;
  instructor: string;
  whatYouWillLearn: string;
  //   courseContent: CourseContent[]; // define later
  //   ratingAndReviews: RatingReview[];
  category: string;
  tags: string[];
  studentsEnrolled: string[];
  instructions: string[];
  createdAt: string;
  updatedAt: string;
}
