// on subSection RN, i m uploading image later on convert to video

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { LuCloudUpload } from "react-icons/lu";
import {
  createSubSection,
  updateSubSection,
} from "../../../../../services/opeartions/courseApi";
import { useCourseStore } from "../../../../../store/useCourseStore";
import { toast } from "react-toastify";
import { ImSpinner10 } from "react-icons/im";

const SubSectionModal = ({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) => {
  const [thumbnailPreview, setThumbnailPreview] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const course = useCourseStore((s) => s.course);
  const setCourse = useCourseStore((s) => s.setCourse);

  const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) return;
    setThumbnailPreview(file);
    setVideoPreview(URL.createObjectURL(file));
  };

  const onSubmit = async () => {
    if (view) return;

    if (edit) {
      if (isFormUpdated()) {
        editSubSection();
      } else {
        toast.error("No changes to update lecture");
      }
      return;
    }

    console.log(getValues("title"));
    console.log(getValues("description"));
    console.log(thumbnailPreview);

    const formData = new FormData();
    if (thumbnailPreview) {
      formData.append("file", thumbnailPreview);
    }
    formData.append("title", getValues("title"));
    formData.append("description", getValues("description"));
    formData.append("timeDuration", "2h");
    formData.append("sectionId", modalData);
    if (course) {
      formData.append("courseId", course._id);
    }

    const result = await createSubSection(formData, setLoading);
    if (result) {
      setCourse(result);
      setModalData(null);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const isFormUpdated = () => {
    if (
      modalData.title != getValues("title") ||
      modalData.description != getValues("description")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const editSubSection = async () => {
    const currentValues = getValues();

    const payload: {
      courseId: string;
      subSectionId: string;
      title?: string;
      description?: string;
    } = {
      courseId: course!._id,
      subSectionId: modalData._id,
    };

    if (currentValues.title !== modalData.title) {
      payload.title = currentValues.title;
    }

    if (currentValues.description !== modalData.description) {
      payload.description = currentValues.description;
    }

    console.log(payload);

    const result = await updateSubSection(payload, setLoading);
    if (result) {
      setCourse(result);
      setModalData(null);
    }
  };

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (view || edit) {
      setValue("title", modalData.title);
      setValue("description", modalData.description);
      setVideoPreview(modalData.videoUrl);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="w-full max-w-[580px] bg-richblack-800 border border-richblack-600 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-richblack-600 bg-richblack-700">
          <p className="text-base font-semibold text-richblack-5">
            {add && "Adding Lecture"}
            {view && "Viewing Lecture"}
            {edit && "Editing Lecture"}
          </p>
          <button
            type="button"
            onClick={() => setModalData(null)}
            className="p-1.5 rounded-lg text-richblack-300 hover:text-richblack-5 hover:bg-richblack-600 transition-colors"
          >
            <IoMdClose className="text-lg" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-6 flex flex-col gap-5 max-h-[80vh] overflow-y-auto"
        >
          {/* Video Upload */}
          <div className="space-y-2">
            {videoPreview ? (
              <div className="space-y-2">
                <p className="text-sm font-medium text-richblack-5">
                  Course Thumbnail
                </p>
                <img
                  src={videoPreview}
                  alt=""
                  className="w-full rounded-xl border border-richblack-600"
                />
                {!view && !edit && (
                  <button
                    onClick={() => {
                      setThumbnailPreview(null);
                      setVideoPreview(null);
                    }}
                    type="button"
                  >
                    Cancel
                  </button>
                )}
              </div>
            ) : (
              <>
                <p className="text-sm font-medium text-richblack-5">
                  Course Thumbnail
                </p>
                <div className="w-full border border-dashed border-richblack-500 py-8 px-4 flex flex-col items-center gap-4 bg-richblack-700 rounded-2xl text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-richblack-800 text-yellow-50">
                    <button
                      onClick={handleClick}
                      type="button"
                      className="cursor-pointer"
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
                    <span className="text-yellow-50 font-semibold">Browse</span>
                    <br />
                    <span className="text-xs text-richblack-400">
                      Max 6MB each (12MB for videos)
                    </span>
                  </p>
                  <div className="flex gap-8 text-xs text-richblack-400">
                    <p>• Aspect ratio 16:9</p>
                    <p>• Recommended size 1024x576</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-richblack-5">
              Lecture Title
            </p>
            <input
              disabled={view}
              type="text"
              placeholder="Enter Title"
              className="w-full rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 placeholder:text-richblack-400 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30 disabled:opacity-60 disabled:cursor-not-allowed"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-xs text-pink-200">Lecture Title is required</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-richblack-5">
              Lecture Description
            </p>
            <textarea
              disabled={view}
              placeholder="Enter Description"
              rows={4}
              className="w-full rounded-xl p-3 bg-richblack-700 border border-richblack-600 text-sm text-richblack-5 placeholder:text-richblack-400 outline-none focus:border-yellow-50 focus:ring-2 focus:ring-yellow-900/30 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-xs text-pink-200">
                Course description is required
              </p>
            )}
          </div>

          {/* Buttons */}
          {!view && (
            <div className="flex gap-3 justify-end pt-1">
              <button
                onClick={() => setModalData(null)}
                type="button"
                className="text-sm font-medium text-richblack-200 border border-richblack-600 bg-richblack-700 hover:bg-richblack-600 transition-colors px-5 py-2.5 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                type="button"
                className="text-sm font-medium text-black bg-yellow-50 hover:bg-yellow-100 transition-colors px-5 py-2.5 rounded-xl"
              >
                {loading ? (
                  <ImSpinner10 className="animate-spin" size={19} />
                ) : edit ? (
                  "Save Edits"
                ) : (
                  "Save"
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubSectionModal;
