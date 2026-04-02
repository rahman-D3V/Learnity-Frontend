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
};
