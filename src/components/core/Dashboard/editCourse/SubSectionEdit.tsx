import { MdDeleteSweep, MdEdit } from "react-icons/md";

import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import {
  useCourseStore,
  type SubSectionType,
} from "../../../../store/useCourseStore";
import {
  deleteSection,
  deleteSubSection,
} from "../../../../services/opeartions/courseApi";
import SubSectionModal from "../createCourse/courseBuilder/SubSectionModal";

const SubSectionEdit = ({ handleChangeEditSectionName }: NestedViewProps) => {
  const course = useCourseStore((s) => s.course);
  const setCourse = useCourseStore((s) => s.setCourse);

  const [editSubSection, setEditSubSection] = useState<object | null>(null);
  const [addSubSection, setAddSubSection] = useState<string | null>(null);
  const [viewSubSection, setViewSubSection] = useState<object | null>(null);

  const handleDeleteSection = async (sectionId: string) => {
    const courseId = course!._id;

    const result = await deleteSection(sectionId, courseId);
    if (result) {
      setCourse(result);
    }
  };

  const handleDeleteSubSection = async (
    subSectionId: string,
    sectionId: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    // show confirmation model later

    // const subSectionId = data._id;
    // const sectionId = data.sectionId;
    if (!course?._id) return;
    const courseId = course._id;

    console.log(subSectionId, sectionId, courseId);

    const result = await deleteSubSection(subSectionId, sectionId, courseId);
    if (result) {
      setCourse(result);
    }
  };

  const handleEditSubSection = (
    e: React.MouseEvent<HTMLButtonElement>,
    data: SubSectionType,
    sectionId: string,
  ) => {
    e.stopPropagation();
    setEditSubSection({ ...data, sectionId });
  };
  console.log(course, "From NestedView");

  return (
    <>
      <div className="flex flex-col gap-3">
        {course?.courseContent?.map((section, sectionIndex) => (
          <details key={section._id} open className="group">
            {/* Section Header */}
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 bg-richblack-700 border border-richblack-600 rounded-xl group-open:rounded-b-none list-none">
              <div className="flex items-center gap-3">
                <RxDropdownMenu className="text-base text-richblack-300 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400/80 mr-2">
                  Section {sectionIndex + 1}
                </span>
                <p className="font-semibold text-sm text-richblack-5">
                  {section.sectionName}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() =>
                    handleChangeEditSectionName(
                      section._id,
                      section.sectionName,
                    )
                  }
                  className="p-1.5 rounded-lg text-richblack-300 hover:text-yellow-50 hover:bg-richblack-500 transition-colors"
                >
                  <MdEdit className="text-base" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteSection(section._id)}
                  className="p-1.5 rounded-lg text-richblack-300 hover:text-pink-200 hover:bg-richblack-500 transition-colors"
                >
                  <MdDeleteSweep className="text-base" />
                </button>
              </div>
            </summary>

            {/* Sub Sections */}
            <div className="border border-t-0 border-richblack-600 rounded-b-xl overflow-hidden bg-richblack-800">
              {section.subSection.length === 0 && (
                <p className="text-xs text-richblack-400 italic px-5 pl-10 py-3">
                  No lectures yet
                </p>
              )}

              {section.subSection.map((data, i) => (
                <div
                  onClick={() => setViewSubSection(data)}
                  key={data._id}
                  className="flex cursor-pointer items-center justify-between px-4 pl-10 py-3 border-b border-richblack-700 hover:bg-richblack-900 transition-colors group/sub last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-richblack-600 flex items-center justify-center shrink-0">
                      <span className="text-[10px] text-richblack-300 font-semibold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-sm text-richblack-100 group-hover/sub:text-richblack-5 transition-colors">
                      {data.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={(e) =>
                        handleEditSubSection(e, data, section._id)
                      }
                      className="p-1.5 rounded-lg text-richblack-400 hover:text-yellow-50 hover:bg-richblack-600 transition-colors"
                    >
                      <MdEdit className="text-base" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) =>
                        handleDeleteSubSection(data._id, section._id, e)
                      }
                      className="p-1.5 rounded-lg text-richblack-400 hover:text-pink-200 hover:bg-richblack-600 transition-colors"
                    >
                      <MdDeleteSweep className="text-base" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Lecture */}
              <button
                type="button"
                onClick={() => setAddSubSection(section._id)}
                className="flex cursor-pointer items-center gap-2 px-4 pl-10 py-3 w-full text-sm font-semibold text-yellow-50  border-t border-richblack-700"
              >
                <FaPlus className="text-xs" />
                Add Lecture
              </button>
            </div>
          </details>
        ))}
      </div>

      {addSubSection ? (
        <SubSectionModal
          modalData={addSubSection}
          setModalData={setAddSubSection}
          add={true}
        />
      ) : viewSubSection ? (
        <SubSectionModal
          modalData={viewSubSection}
          setModalData={setViewSubSection}
          view={true}
        />
      ) : editSubSection ? (
        <SubSectionModal
          modalData={editSubSection}
          setModalData={setEditSubSection}
          edit={true}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SubSectionEdit;

type NestedViewProps = {
  handleChangeEditSectionName: (sectionId: string, sectionName: string) => void;
};
