import { useEffect, useState } from "react";
import { getEnrolledCourses } from "../../../services/opeartions/profileApi";

const EnrolledCourse = () => {
  const [courses, setCourses] = useState([]);

  const getEnrolledCourse = async () => {
    const data = await getEnrolledCourses();
    setCourses(data);
  };

  useEffect(() => {
    getEnrolledCourse();
    console.log(courses);
  }, []);

  return (
    <div className="text-white">
      EnrolledCourse <br /> <br />
      {courses?.length == 0 ? (
        "Doesn't Enrolled in any course"
      ) : (
        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4">
          <p className="bg-gray-600">Course Name</p>
          <p className="bg-green-300">Duration</p>
          <p className="bg-yellow-300">Progress</p>

          {courses?.map((item) => (
            <>
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  className="h-14 w-14 rounded-lg object-cover"
                  src={item.thumbnail}
                />
                <div>
                  <p>{item.courseName}</p>
                  <p className="text-sm text-gray-500">
                    {" "}
                    {item.courseDescription?.length > 50
                      ? `${item.courseDescription?.slice(0, 50)}...`
                      : item.courseDescription}
                  </p>
                </div>
              </div>

              <p>{item?.totalDuration}</p>
              <p>Progress: {item.progressPercentage || 0}%</p>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourse;
