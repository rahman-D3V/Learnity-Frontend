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
  user: object;
  loading: boolean;
  setUser: (data: object) => void;
  setLoading: (data: boolean) => void;
};
