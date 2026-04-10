export const BASE_URL = "http://localhost:4000/api/v1";

export const categoriesEndpoints = {
  getAllCategoriesApi: BASE_URL + "/course/showAllCategories",
};

export const authEndpoints = {
  sendOtpApi: BASE_URL + "/auth/sendotp",
  signUpApi: BASE_URL + "/auth/signup",
  loginApi: BASE_URL + "/auth/login",
  resetPasswordTokenApi: BASE_URL + "/auth/reset-password-token",
  resetPasswordApi: BASE_URL + "/auth/reset-password",
  chagePasswordApi: BASE_URL + "/auth/changepassword"
};

export const profileEndpoints = {
  getUserDetails: BASE_URL + "/profile/getUserDetails",
  updateProfilePicture: BASE_URL + "/profile/updateDisplayPicture",
  updateProfile: BASE_URL + "/profile/updateProfile"

}