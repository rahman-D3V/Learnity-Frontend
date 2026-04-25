export const BASE_URL = "http://localhost:4000/api/v1";

export const categoriesEndpoints = {
  getAllCategoriesApi: BASE_URL + "/course/showAllCategories",
  getCatgegoriesPageDetails: BASE_URL + "/course/getCategoryPageDetails",
};

export const authEndpoints = {
  sendOtpApi: BASE_URL + "/auth/sendotp",
  signUpApi: BASE_URL + "/auth/signup",
  loginApi: BASE_URL + "/auth/login",
  resetPasswordTokenApi: BASE_URL + "/auth/reset-password-token",
  resetPasswordApi: BASE_URL + "/auth/reset-password",
  chagePasswordApi: BASE_URL + "/auth/changepassword",
};

export const profileEndpoints = {
  getUserDetails: BASE_URL + "/profile/getUserDetails",
  updateProfilePicture: BASE_URL + "/profile/updateDisplayPicture",
  updateProfile: BASE_URL + "/profile/updateProfile",
  getEnrolledCourses: BASE_URL + "/profile/getEnrolledCourses",
};

export const courseEndpoints = {
  createCourse: BASE_URL + "/course/createCourse",
  deleteCourse: BASE_URL + "/course/deleteCourse",
  courseDetails: BASE_URL + "/course/getCourseDetails",
  updateCourse: BASE_URL + "/course/updateCourse",

  createSection: BASE_URL + "/course/addSection",
  deleteSection: BASE_URL + "/course/deleteSection",
  updateSection: BASE_URL + "/course/updateSection",

  createSubSection: BASE_URL + "/course/addSubSection",
  deleteSubSection: BASE_URL + "/course/deleteSubSection",
  updateSubSection: BASE_URL + "/course/updateSubSection",

  getInstructorCourse: BASE_URL + "/course/getInstructorCourses",
};
