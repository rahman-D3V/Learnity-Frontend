import { create } from "zustand";

export const useCourseStore = create<CourseStore>((set) => ({
  step: 1,
  course: null,
  editCourse: false,
  courseTag: null,

  setStep: (step: number) => set({ step }),
  setCourseTag: (data: string[]) => set({ courseTag: data }),
  setCourse: (data: CourseType | null) => set({ course: data }),
}));

type CourseType = {
  _id: string;
  courseName: string;
  courseDescription: string;
  thumbnail: string;
  price: number;
  instructor: string;
  whatYouWillLearn: string;

  courseContent: CourseContentType[];
  ratingAndReviews: string[];

  category: string;

  tags: string[];
  instructions: string[];

  studentsEnrolled: object[];

  createdAt: string;
  updatedAt: string;

  __v: number;
};

type CourseStore = {
  step: number;
  course: CourseType | null;
  editCourse: boolean;
  courseTag: string[] | null;

  setStep: (step: number) => void;
  setCourse: (data: CourseType | null) => void;
  setCourseTag: (data: string[]) => void;
};

export type CourseContentType = {
  _id: string;
  sectionName: string;
  subSection: SubSectionType[];
  __v: number;
};

export type SubSectionType = {
  _id: string;
  title: string;
  description: string;
  timeDuration: string;
  videoUrl: string;
  __v: number;
};
