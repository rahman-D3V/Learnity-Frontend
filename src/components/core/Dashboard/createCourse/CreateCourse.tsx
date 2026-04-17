import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LuCloudUpload } from "react-icons/lu";
import { useCourseStore } from "../../../../store/useCourseStore";
import { apiConnector } from "../../../../services/apiConnector";
import { categoriesEndpoints } from "../../../../services/apis";
import ChipInput from "../ChipInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createCourse } from "../../../../services/opeartions/courseApi";
import CourseBuilderForm from "./courseBuilder/CourseBuilderForm";
import { ImSpinner10 } from "react-icons/im";
import PublishCourse from "./courseBuilder/PublishCourse";
export const CreateCourse = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const step = useCourseStore((s) => s.step);
  const setStep = useCourseStore((s) => s.setStep);

  const [courseInstruction, setCourseInstruction] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [courseCategories, setCourseCategories] = useState([]);
  console.log(courseCategories);

  const course = useCourseStore((s) => s.course);
  const setCourse = useCourseStore((s) => s.setCourse);

  const courseTag = useCourseStore((s) => s.courseTag);
  console.log(courseTag);

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (!file) return; // important safety check

    setThumbnail(file);

    const imageURL = URL.createObjectURL(file);
    setThumbnailPreview(imageURL);

    console.log(imageURL);
  };

  const handleClick = () => {
    fileInputRef.current!.click();
  };

  const handleCourseInstruction = () => {
    if (input.trim() === "") return;
    setCourseInstruction((prev) => [input, ...prev]);
    setInput("");
  };

  const removeInstruction = (index: number) => {
    const updatedCourseInstruction = courseInstruction.filter(
      (_, i) => i !== index,
    );

    setCourseInstruction(updatedCourseInstruction);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    setLoading(true);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (thumbnail) {
      formData.append("file", thumbnail);
    }

    formData.append("instructions", JSON.stringify(courseInstruction));
    formData.append("tags", JSON.stringify(courseTag));

    console.log(formData);
    const res = await createCourse(formData);
    console.log(res);

    setLoading(false);
    if (res) {
      setStep(2);
      setCourse(res);
    }
  };

  console.log(course);

  useEffect(() => {
    async function fetchAllCategories() {
      const response = await apiConnector(
        "GET",
        categoriesEndpoints.getAllCategoriesApi,
      );
      setCourseCategories(response.data.data);
      console.log(response.data.data);
    }
    fetchAllCategories();
  }, []);

  return (
    <div className="text-white w-full px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Add Course</h1>
        <p className="text-sm text-richblack-300 mt-1">
          Fill in the details below to create your course
        </p>
      </div>

      <div className="flex justify-between items-start w-[665px] mb-8">
        {steps.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <p
              className={`w-[38px] h-[38px] flex items-center justify-center rounded-full text-sm font-semibold transition-all
            ${
              item.id == step
                ? "bg-yellow-900 text-yellow-50 border border-yellow-200 shadow-[0_0_0_4px_rgba(250,204,21,0.08)]"
                : "bg-richblack-800 border border-richblack-700 text-richblack-100"
            }
            ${
              item.id < step
                ? "bg-yellow-100 border border-yellow-100 text-black"
                : ""
            }`}
            >
              {item.id < step ? "✓" : item.id}
            </p>
            <p
              className={`text-xs font-medium text-center ${
                item.id === step ? "text-yellow-50" : "text-richblack-300"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Course-Information */}
      {step == 1 && (
        <div className="flex gap-8 items-start">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[665px] bg-richblack-800 border border-richblack-700 p-6 flex flex-col gap-6 rounded-2xl shadow-lg"
          >
            <div className="space-y-2">
              <p className="text-sm font-medium text-richblack-5">
                Course Title
              </p>
              <input
                type="text"
                placeholder="Enter Course Title"
                className="w-full rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 placeholder:text-richblack-400 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30"
                {...register("courseName", { required: true })}
              />
              {errors.courseName && (
                <p className="text-xs text-pink-200">
                  Course title is required
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-richblack-5">
                Course Short Description
              </p>
              <textarea
                placeholder="Enter Description"
                className="w-full min-h-[120px] rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 placeholder:text-richblack-400 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30 resize-none"
                {...register("courseDescription", { required: true })}
              />
              {errors.courseDescription && (
                <p className="text-xs text-pink-200">
                  Course description is required
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-richblack-5">Price</p>
              <input
                type="number"
                placeholder="Enter Price"
                className="w-full rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 placeholder:text-richblack-400 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-xs text-pink-200">
                  Course price is required
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-richblack-5">Category</p>
              <select
                {...register("category", { required: true })}
                className="w-full rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30"
              >
                <option>Choose a Category</option>
                {courseCategories.map((item: CourseCategory) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-xs text-pink-200">Category is required</p>
              )}
            </div>

            <ChipInput />

            <div className="space-y-2">
              {thumbnailPreview ? (
                <div className="space-y-3 rounded-2xl bg-richblack-700 border border-richblack-600 p-4">
                  <p className="text-sm font-medium text-richblack-5">
                    Course Thumbnail
                  </p>
                  <img
                    src={thumbnailPreview}
                    alt=""
                    className="w-full max-h-[260px] object-cover rounded-xl border border-richblack-600"
                  />
                  <button
                    type="button"
                    onClick={() => setThumbnailPreview(null)}
                    className="text-sm font-medium text-pink-200 hover:text-pink-100 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm font-medium text-richblack-5">
                    Course Thumbnail
                  </p>
                  <div className="w-full border border-dashed py-8 px-4 flex flex-col items-center gap-4 bg-richblack-700 border-richblack-600 rounded-2xl text-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-richblack-800 text-yellow-50">
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={handleClick}
                      >
                        <LuCloudUpload size={28} />
                      </button>
                      <input
                        ref={fileInputRef}
                        className="hidden"
                        type="file"
                        name=""
                        id=""
                        onChange={handleThumbnail}
                      />
                    </div>

                    <p className="text-sm text-richblack-100 leading-6">
                      Drag and drop an image, or{" "}
                      <span className="text-yellow-50 font-semibold">
                        Browse
                      </span>
                      <br />
                      <span className="text-richblack-300">
                        Max 6MB each (12MB for videos)
                      </span>
                    </p>

                    <div className="flex gap-8 text-xs text-richblack-300">
                      <p>• Aspect ratio 16:9</p>
                      <p>• Recommended size 1024x576</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-richblack-5">
                Benefits of the course
              </p>
              <input
                type="text"
                placeholder="Enter Benefits of the course"
                className="w-full rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 placeholder:text-richblack-400 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30"
                {...register("whatYouWillLearn", { required: true })}
              />
              {errors.whatYouWillLearn && (
                <p className="text-xs text-pink-200">
                  Benefits of the course is required
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-richblack-5">
                Requirements/Instructions
              </p>
              <input
                type="text"
                placeholder="Enter Instrcutiions"
                className="w-full rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 placeholder:text-richblack-400 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button
                type="button"
                onClick={handleCourseInstruction}
                className="text-sm font-semibold text-yellow-50 hover:text-yellow-100 transition-colors"
              >
                Add
              </button>

              <div className="space-y-2 pt-1">
                {courseInstruction.map((i, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl bg-richblack-700 border border-richblack-600 px-3 py-2"
                  >
                    <p className="text-sm text-richblack-50">{i}</p>
                    <span
                      onClick={() => removeInstruction(index)}
                      className="text-xs text-richblack-300 hover:text-pink-200 cursor-pointer transition-colors"
                    >
                      clear
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="self-end flex items-center cursor-pointer bg-yellow-50 hover:bg-yellow-100 transition-colors py-3 px-5 text-black gap-2 rounded-lg font-medium"
            >
              {loading ? <ImSpinner10 className="animate-spin" size={19}/> : "Next"}
              {!loading && <IoIosArrowForward size={14} />}
            </button>
          </form>

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
                Add Topics in the Course Builder section to create lessons,
                quizzes, and assignments.
              </li>
              <li>
                Information from the Additional Data section shows up on the
                course single page.
              </li>
              <li>Make Announcements to notify any important updates.</li>
              <li>Notes to all enrolled students at once.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Course-Builder-Form */}
      {step == 2 && <CourseBuilderForm />}


      {/* Course-Publish-Form */}
      {step == 3 && <PublishCourse/>}

    </div>
  );
};

const steps = [
  {
    id: 1,
    title: "Course Information",
  },
  {
    id: 2,
    title: "Course Builder",
  },
  {
    id: 3,
    title: "Publish",
  },
];

type FormValues = {
  category: string;
  courseDescription: string;
  courseName: string;
  price: string;
  whatYouWillLearn: string;
};

type CourseCategory = {
  description: string;
  name: string;
  _id: string;
};
