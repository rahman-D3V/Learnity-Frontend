import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../../../../services/opeartions/courseApi";
import { useCourseStore } from "../../../../../store/useCourseStore";
import { toast } from "react-toastify";

const PublishCourse = () => {
  const course = useCourseStore((s) => s.course);
  const navigate = useNavigate();

  const handlePublishCourse = async () => {
    toast.success("Course published successful");
    navigate("dashboard/my-courses");
  };
  const handleDeleteCourse = async () => {
    if (!course) return;
    const courseId = course?._id;
    await deleteCourse(courseId);
  };

  return (
    <div className="flex gap-8 items-start">
      <div className="w-[665px] bg-richblack-800 border border-richblack-700 p-6 flex flex-col gap-6 rounded-2xl shadow-lg">
        <p className="font-semibold text-2xl text-richblack-5">
          Publish Settings
        </p>
        <p className="font-[inter] font-medium text-[16px] text-richblack-400">
          Are u sure to publish this cousre?
        </p>
        <div className="flex justify-end gap-5">
          <button onClick={handleDeleteCourse}>Cancel</button>
          <button onClick={handlePublishCourse}>Publish</button>
        </div>
      </div>

      <div className="w-[384px] rounded-2xl p-6 space-y-4 bg-richblack-800 border border-richblack-700 shadow-lg sticky top-6">
        <p className="text-base font-semibold text-yellow-50">
          ⚡ Course Upload Tips
        </p>
        <ul className="space-y-3 text-sm text-richblack-100 leading-6 list-disc pl-5">
          <li>Set the Course Price option or make it free.</li>
          <li>Standard size for the course thumbnail is 1024x576.</li>
          <li>Video section controls the course overview video.</li>
          <li>Course Builder is where you create & organize a course.</li>
          <li>
            Add Topics in the Course Builder section to create lessons, quizzes,
            and assignments.
          </li>
          <li>
            Information from the Additional Data section shows up on the course
            single page.
          </li>
          <li>Make Announcements to notify any important updates.</li>
          <li>Notes to all enrolled students at once.</li>
        </ul>
      </div>
    </div>
  );
};

export default PublishCourse;
