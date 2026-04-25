import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { ImSpinner10 } from "react-icons/im";
import {
  useCourseStore,
  type CourseContentType,
} from "../../../../store/useCourseStore";
import NestedView from "../createCourse/courseBuilder/NestedView";
import {
  createSection,
  fetchCourseDetails,
  updateSection,
} from "../../../../services/opeartions/courseApi";
import { useNavigate, useParams } from "react-router-dom";
import SubSectionEdit from "./SubSectionEdit";

const SectionEdit = () => {
  const setStep = useCourseStore((s) => s.setStep);
  const course = useCourseStore((s) => s.course);
  const setCourse = useCourseStore((s) => s.setCourse);
  const [editSectionName, setEditSectionName] = useState<string | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const handleCancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };

  const handleGoToNextStep = () => {
    console.log(course?.courseContent?.length);

    if (
      course?.courseContent?.length === 0 ||
      course?.courseContent === undefined
    ) {
      toast.error("Please add at least one section");
      return;
    }

    if (
      course?.courseContent?.some(
        (section: CourseContentType) => section.subSection.length === 0,
      )
    ) {
      toast.error("Please add at least lecture to each section");
      return;
    }

    toast.success("Course content updated");
    setStep(1);
    navigate("/dashboard/my-courses");
  };

  const handleEditSection = async () => {
    // editSectionName --> contains sectionId of a paticular section

    if (editSectionName) {
      // call update section api here
      const newSectionName = getValues("sectionName");
      const courseId = course?._id;

      const res = await updateSection(
        newSectionName,
        editSectionName,
        courseId,
      );

      if (res) {
        setCourse(res);
        setEditSectionName(null);
        setValue("sectionName", "");
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data, "From 76");
    // call create section api here

    if (!course?._id) return;

    const result = await createSection(data.sectionName, course._id);
    if (result) {
      console.log(result);
      setCourse(result);
      setValue("sectionName", "");
    }
  };

  const handleChangeEditSectionName = (
    sectionId: string,
    sectionName: string,
  ) => {
    if (editSectionName === sectionId) {
      handleCancelEdit();
      return;
    }
    setEditSectionName(sectionId);

    setValue("sectionName", sectionName);
  };

  useEffect(() => {
    async function getCourseDetails() {
      if (!id) return;

      const res = await fetchCourseDetails(id);
      if (res) {
        setCourse(res);
        console.log(res.courseContent);
      }
    }

    getCourseDetails();
  }, []);

  console.log(editSectionName);
  console.log(getValues("sectionName"));
  return (
    <div className="flex gap-8 items-start">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[665px] bg-richblack-800 border border-richblack-700 p-6 flex flex-col gap-6 rounded-2xl shadow-lg"
      >
        <p className="text-lg font-semibold text-richblack-5">Course Builder</p>

        <div className="space-y-2">
          <p className="text-sm font-medium text-richblack-5">Section Name</p>
          <input
            type="text"
            placeholder="Add a section to build your course"
            className="w-full rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 placeholder:text-richblack-400 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30"
            {...register("sectionName", { required: true })}
          />
          {errors.sectionName && (
            <p className="text-xs text-pink-200">Section name is required</p>
          )}
        </div>

        {editSectionName ? (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleEditSection}
              className="text-sm font-semibold text-yellow-50 py-2.5 px-5 flex items-center gap-2 border border-yellow-50/40 bg-yellow-50/5 hover:bg-yellow-50/10 transition-colors rounded-xl"
            >
              <CiCirclePlus size={18} />
              Edit Section Name
            </button>
            <p
              onClick={handleCancelEdit}
              className="text-sm text-richblack-300 hover:text-richblack-100 cursor-pointer transition-colors"
            >
              Cancel edit
            </p>
          </div>
        ) : (
          <button
            type="submit"
            className="self-start text-sm font-semibold text-yellow-50 py-2.5 px-5 flex items-center gap-2 border border-yellow-50/40 bg-yellow-50/5 hover:bg-yellow-50/10 transition-colors rounded-xl"
          >
            {isSubmitting ? (
              <ImSpinner10 className="animate-spin" size={19} />
            ) : (
              <>
                {" "}
                <CiCirclePlus size={18} /> Create Section
              </>
            )}
          </button>
        )}

        {(course?.courseContent?.length ?? 0) > 0 && (
          <SubSectionEdit
            handleChangeEditSectionName={handleChangeEditSectionName}
          />
        )}

        <button
          type="button"
          onClick={handleGoToNextStep}
          className="self-end flex items-center cursor-pointer bg-yellow-50 hover:bg-yellow-100 transition-colors py-3 px-5 text-black gap-2 rounded-lg font-medium text-sm"
        >
          Confirm Changes <IoIosArrowForward size={14} />
        </button>
      </form>
    </div>
  );
};

export default SectionEdit;

type FormValues = {
  sectionName: string;
};
