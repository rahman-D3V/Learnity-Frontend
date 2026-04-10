import { create } from "zustand";

export const useAuthStore = create<AuthStore>((set) => ({
  signupData: null,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token") as string)
    : null,
  logoutModel: false,

  setSignupData: (data) => set({ signupData: data }),
  setLoading: (data) => set({ loading: data }),
  setToken: (data) => set({ token: data }),
  setLogoutModel: (data) => set({ logoutModel: data }),
}));

type AuthStore = {
  signupData: unknown;
  loading: boolean;
  token: string | null;
  logoutModel: boolean;

  setSignupData: (data: unknown) => void;
  setLoading: (data: boolean) => void;
  setToken: (data: string | null) => void;
  setLogoutModel: (data: boolean) => void;
};
