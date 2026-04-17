import { toast } from "react-toastify";
import { useAuthStore } from "../../store/useAuthStore";
import { apiConnector } from "../apiConnector";
import { courseEndpoints } from "../apis";

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
  } catch (error) {
    console.log(error);
    toast.error("Failed to remove couse data");
  } finally {
    toast.dismiss(toastId);
  }
}
