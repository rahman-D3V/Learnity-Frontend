import { create } from "zustand";

export const useCatalogStore = create<CatalogStore>((set) => ({
  categoryId: localStorage.getItem("categoryId") || null,
  categoryName: localStorage.getItem("categoryName") || null,
  categoryDescription: localStorage.getItem("categoryDescription") || null,

  setCategoryId: (id: string | null) => {
    set({ categoryId: id });

    if (id == null) {
      localStorage.removeItem("categoryId");
    } else {
      localStorage.setItem("categoryId", id);
    }
  },

  setCategoryName: (name: string | null) => {
    set({ categoryName: name });
    if (name == null) {
      localStorage.removeItem("categoryName");
    } else {
      localStorage.setItem("categoryName", name);
    }
  },

  SetCategoryDescription: (desc: string | null) => {
    set({ categoryDescription: desc });
    if (desc == null) {
      localStorage.removeItem("categoryDescription");
    } else {
      localStorage.setItem("categoryDescription", desc);
    }
  },
}));

type CatalogStore = {
  categoryId: string | null;
  categoryName: string | null;
  categoryDescription: string | null;

  setCategoryId: (id: string | null) => void;
  setCategoryName: (name: string | null) => void;
  SetCategoryDescription: (desc: string | null) => void;
};
