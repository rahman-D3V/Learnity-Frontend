import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import { apiConnector } from "../apiConnector";
import { categoriesEndpoints, courseEndpoints } from "../apis";
import { useCatalogStore } from "../../store/useCatalogStore";

export async function createCourse(formData) {
  const { token } = useAuthStore.getState();

  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.createCourse,
      formData,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Course Details added successfully");
    return response.data.data;
  } catch (error) {
    toast.error("Something went wront, try again");
    console.log(error);
  }
}

export async function createSection(sectionName, courseId) {
  const { token } = useAuthStore.getState();

  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.createSection,
      { sectionName, courseId },
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Section Created Successfully");
    return response.data.data;
  } catch (error) {
    toast.error("Something went wront, try again");
    console.log(error);
  }
}

export async function createSubSection(formData, setLoading) {
  const { token } = useAuthStore.getState();
  setLoading(true);

  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.createSubSection,
      formData,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Section Created Successfully");
    return response.data.data;
  } catch (error) {
    toast.error("Something went wront, try again");
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export async function deleteSection(sectionId, courseId) {
  const { token } = useAuthStore.getState();
  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.deleteSection,
      {
        sectionId,
        courseId,
      },
      {
        Authorization: `Bearer ${token}`,
      },
    );

    console.log(response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Success Deleted Successfully");

    return response.data.data;
  } catch (error) {
    console.log(error);
    toast.error("Can't delete section");
  }
}

export async function updateSection(newSectionName, sectionId, courseId) {
  const { token } = useAuthStore.getState();

  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.updateSection,
      { newSectionName, sectionId, courseId },
      {
        Authorization: `Bearer ${token}`,
      },
    );

    console.log(response, "---update section");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Section Update Successfully");
    return response.data.data;
  } catch (error) {
    console.log(error);
    toast.error("can't Update section");
  }
}

export async function deleteSubSection(subSectionId, sectionId, courseId) {
  const { token } = useAuthStore.getState();

  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.deleteSubSection,
      { subSectionId, sectionId, courseId },
      { Authorization: `Bearer ${token}` },
    );

    console.log(response, "----delete subsection----");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Lecture deleted successfully");
    return response.data.data;
  } catch (error) {
    console.log(error);
    toast.error("can't delete lecture");
  }
}

export async function updateSubSection(payload, setLoading) {
  const { token } = useAuthStore.getState();
  setLoading(true);
  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.updateSubSection,
      payload,
      { Authorization: `Bearer ${token}` },
    );

    console.log(response, "----updating subsection-----");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Lecture update successfully");
    return response.data.data;
  } catch (error) {
    console.log(error);
    toast.error("Lecture update failed");
  } finally {
    setLoading(false);
  }
}

export async function deleteCourse(courseId: string) {
  const toastId = toast.loading("Loading...");
  const { token } = useAuthStore.getState();
  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.deleteCourse,
      { courseId },
      { Authorization: `Bearer ${token}` },
    );

    console.log(response, "----deleting course-----");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("CourseData dleetd successfully");
    return response.data.data;
  } catch (error) {
    console.log(error);
    toast.error("Failed to remove couse data");
  } finally {
    toast.dismiss(toastId);
  }
}

export async function getInstructorCourses() {
  const { token } = useAuthStore.getState();
  const toastId = toast.loading("Loading..");
  try {
    const response = await apiConnector(
      "GET",
      courseEndpoints.getInstructorCourse,
      {},
      { Authorization: `Bearer ${token}` },
    );

    if (!response.data.success) {
      throw new Error("Something went wrong");
    }
    return response.data.data;
  } catch (error) {
    console.log(error);
  } finally {
    toast.dismiss(toastId);
  }
}

export async function fetchCourseDetails(courseId: string) {
  try {
    const response = await apiConnector("POST", courseEndpoints.courseDetails, {
      courseId,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return response.data.data;
  } catch (error) {
    toast.error("Something went wrong, Try again");
    console.log("Error while fetching course deatisl", error);
  }
}

export async function updateCourse(data) {
  const { token } = useAuthStore.getState();
  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.updateCourse,
      data,
      { Authorization: `Bearer ${token}` },
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Course data update successfully");
    return true;
  } catch (error) {
    toast.error("Something went wrong, Try again");
    console.log("Error while fetching course deatisl", error);
    return false;
  }
}

export async function getCategoryDetails() {
  const toastId = toast.loading("Loading...");
  try {
    const { categoryId } = useCatalogStore.getState();

    const response = await apiConnector(
      "POST",
      categoriesEndpoints.getCatgegoriesPageDetails,
      { categoryId },
    );
    console.log(" fetching cat details", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (error) {
    console.log("Error while fetching cat details", error);
    toast.error("Can't fetched cat details");
  } finally {
    toast.dismiss(toastId);
  }
}
