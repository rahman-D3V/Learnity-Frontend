import { useCartStore } from "../../../store/useCartStore";

const Cart = () => {
  const { totalItems, cart } = useCartStore();

  const handleCheckout = () => {
    const courses = cart.map((item) => item._id);
    console.log(courses);
    //later - Api integrate razorpay
  };

  return (
    <div className="w-full px-6 py-8 text-white">
      <h1 className="text-2xl font-bold text-white mb-2">Your Cart</h1>
      <p className="text-sm text-gray-400 mb-6">{totalItems} Courses in Cart</p>

      <div className="flex gap-6 items-start">
        {/* ── LEFT — Cart Items ── */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Cart Item */}
          <div className="bg-[#1c1c28] border border-white/10 rounded-2xl p-4 flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
              alt="course"
              className="w-40 h-24 rounded-xl object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-snug mb-1">
                The Complete Python Bootcamp From Zero to Hero in Python
              </p>
              <p className="text-xs text-gray-500 mb-2">Programming</p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm font-bold">4.8</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3.5 h-3.5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 text-xs">(2,340 reviews)</span>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between shrink-0">
              <button className="text-xs text-red-400 hover:text-red-300 border border-red-400/20 hover:bg-red-400/10 transition-colors px-3 py-1 rounded-lg">
                Remove
              </button>
              <p className="text-white font-bold text-base">₹1,700</p>
            </div>
          </div>

          {/* Cart Item */}
          <div className="bg-[#1c1c28] border border-white/10 rounded-2xl p-4 flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400"
              alt="course"
              className="w-40 h-24 rounded-xl object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-snug mb-1">
                The Complete JavaScript Course 2024 — From Zero to Expert
              </p>
              <p className="text-xs text-gray-500 mb-2">Web Development</p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm font-bold">4.7</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3.5 h-3.5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 text-xs">(1,890 reviews)</span>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between shrink-0">
              <button className="text-xs text-red-400 hover:text-red-300 border border-red-400/20 hover:bg-red-400/10 transition-colors px-3 py-1 rounded-lg">
                Remove
              </button>
              <p className="text-white font-bold text-base">₹2,800</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Order Summary ── */}
        <div className="w-72 shrink-0 bg-[#1c1c28] border border-white/10 rounded-2xl p-5 sticky top-6">
          <p className="text-xs uppercase tracking-widest text-yellow-400/80 mb-4">
            Order Summary
          </p>

          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Price (2 items)</span>
            <span>₹4,500</span>
          </div>
          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <span>Discount</span>
            <span className="text-green-400">- ₹0</span>
          </div>

          <div className="border-t border-white/10 pt-4 flex justify-between items-center mb-5">
            <span className="text-white font-semibold">Total</span>
            <span className="text-white font-bold text-xl">₹4,500</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-2.5 rounded-xl text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
