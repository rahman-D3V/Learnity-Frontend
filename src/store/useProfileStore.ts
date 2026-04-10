import { create } from "zustand";

export const useProfileStore = create<UserStore>((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  loading: false,
  setLoading: (data) => set({ loading: data }),
  setUser: (data) => set({ user: data }),
}));

type UserStore = {
  user: UserType | null;
  loading: boolean;
  setUser: (data: UserType | null) => void;
  setLoading: (data: boolean) => void;
};

type UserType = {
  accountType: string;
  email: string;
  firstName: string;
  id: string;
  image: string;
  lastName: string;
  additionalDetails: AdditionalDetailsType
};

type AdditionalDetailsType = {
  about: string,
  contactNumber: string,
  dateOfBirth: string,
  gender: string
}
