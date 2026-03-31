import { create } from "zustand";

export const useCartStore = create<CartStore>((set) => ({
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [],

  totalAmount: localStorage.getItem("totalAmount")
    ? JSON.parse(localStorage.getItem("totalAmount") as string)
    : 0,

  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems") as string)
    : 0,

  addToCart: (course) =>
    set((state) => {
      const exists = state.cart.some((item) => item._id === course._id);

      if (exists) {
        // toast: course alreasy exist in cart
        return {};
      }

      const updatedCart = [...state.cart, course];
      const updatedTotalAmount = state.totalAmount + course.price;
      const updatedTotalItems = state.totalItems + 1;

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));
      localStorage.setItem("totalItems", JSON.stringify(updatedTotalItems));

      // toast: item added succesfully

      return {
        cart: updatedCart,
        totalAmount: updatedTotalAmount,
        totalItems: updatedTotalItems,
      };
    }),

  removeFromCart: (courseId) =>
    set((state) => {
      const index = state.cart.findIndex((item) => item._id === courseId);

      if (index >= 0) {
        // course is present

        const updatedCart = state.cart.filter((item) => item._id !== courseId);
        const updatedTotalItems = state.totalItems - 1;
        const updatedTotalAmount = state.totalAmount - state.cart[index].price;

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));
        localStorage.setItem("totalItems", JSON.stringify(updatedTotalItems));

        // Toast: item removed successfully

        return {
          cart: updatedCart,
          totalAmount: updatedTotalAmount,
          totalItems: updatedTotalItems,
        };
      }
      return {}; // tells zustand, no state changes
    }),

  resetCart: () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("totalAmount");
    localStorage.removeItem("totalItems");

    set({
      cart: [],
      totalAmount: 0,
      totalItems: 0,
    });
  },
}));

type CartStore = {
  cart: CourseType[];
  totalAmount: number;
  totalItems: number;

  addToCart: (course: CourseType) => void;

  removeFromCart: (courseId: string) => void;

  resetCart: () => void;
};

type CourseType = {
  _id: string;
  price: number;
};
