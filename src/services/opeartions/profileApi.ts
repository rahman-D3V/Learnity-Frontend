import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";
import { useProfileStore } from "../../store/useProfileStore";
import type { NavigateFunction } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

export async function updateProfilePicture(
  formData: FormData,
  setFileUploading: Dispatch<SetStateAction<boolean>>,
) {
  const { token } = useAuthStore.getState();
  const { setUser, user } = useProfileStore.getState();

  try {
    setFileUploading(true);

    const response = await apiConnector(
      "POST",
      profileEndpoints.updateProfilePicture,
      formData,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    console.log("Image UPload RESPONSE.....", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Image Uploaded");

    // const obj: UserType = {
    //     ...user!,
    //     image:"nsnkdskd"
    // }

    const updatedUser = { ...user!, image: response.data.data };

    setUser(updatedUser);

    localStorage.setItem("user", JSON.stringify(updatedUser));
  } catch (error) {
    toast.error("Image can't upload");
    console.log(error);
  } finally {
    setFileUploading(false);
  }
}

export async function updateProfileDetails(
  about: string,
  contactNumber: string,
  dateOfBirth: string,
  firstName: string,
  gender: string,
  lastName: string,
  navigate: NavigateFunction,
) {
  try {
    const { token } = useAuthStore.getState();
    const { user, setUser } = useProfileStore.getState();

    const response = await apiConnector(
      "POST",
      profileEndpoints.updateProfile,
      { about, contactNumber, dateOfBirth, gender, firstName, lastName },
      {
        Authorization: `Bearer ${token}`,
      },
    );

    console.log("Response while updating profile...", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    const updatedUser = {
      ...user!,
      firstName,
      lastName,
      additionalDetails: {
        about,
        contactNumber,
        dateOfBirth,
        gender,
      },
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Profile update successfully");
    navigate("/dashboard/my-profile");
  } catch (error) {
    toast.error("Failed to update profile");
    console.log(error);
  }
}

export async function getEnrolledCourses() {
  let result = [];
  try {
    const { token } = useAuthStore.getState();

    const response = await apiConnector(
      "GET",
      profileEndpoints.getEnrolledCourses,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.data;
    return result;
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error);
    toast.error("Could Not Get Enrolled Courses");
  }
}
