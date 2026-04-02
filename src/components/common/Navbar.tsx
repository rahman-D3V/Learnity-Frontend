import { Link, useLocation } from "react-router-dom";
import { navbarLinks, type NavbarLink } from "../../data/navbar-links";
import { useAuthStore } from "../../store/useAuthStore";
import { useProfileStore } from "../../store/useProfileStore";
import { useCartStore } from "../../store/useCartStore";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { useEffect } from "react";
import { apiConnector } from "../../services/apiConnector";
import { categoriesEndpoints } from "../../services/apis";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  // const token = useAuthStore((state) = state.token)
  // const user = useProfileStore((state) = state.user)
  // const totalItems = useCartStore((state) = state.totalItems)

  const user = useProfileStore((s) => s.user);
  const totalItems = useCartStore((s) => s.totalItems);
  const token = useAuthStore((s) => s.token);

  const subLinks = [
    {
      name: "Python",
      path: "/catalog/python",
    },
    {
      name: "AI/ML",
      path: "/catalog/ai-ml",
    },
  ];

  useEffect(() => {
    const fetchAllCategories = async (): Promise<void> => {
      const data = await apiConnector(
        "GET",
        categoriesEndpoints.getAllCategoriesApi,
      );
      console.log(data);
    };

    fetchAllCategories();
  }, []);

  return (
    <div className="bg-richblack-800 border-b border-richblack-700">
      <div className="w-360 flex items-center justify-between mx-auto py-3 px-30 ">
        {/* Logo */}
        <Link to={"/"} className="font-bol text-pure-greys-5">
          Learnity
        </Link>

        {/* Nav-Items */}
        <div className="flex text-richblack-25 font-inter font-normal text-[16px] gap-8">
          {navbarLinks.map((item: NavbarLink, index) =>
            item.path ? (
              <Link
                className={`${path == item.path ? "text-yellow-50" : ""}`}
                key={index}
                to={item.path}
              >
                {item.title}
              </Link>
            ) : (
              <div className="relative group cursor-pointer">
                <span className="px-3 py-2 hover:text-yellow-200 transition">
                  {item.title}
                </span>

                <div className="absolute left-0 top-full mt-2 w-[220px] bg-richblack-5 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {subLinks.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-richblack-900 hover:bg-richblack-100 transition"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        {/* Auth-Button show if user is log-out */}
        <div className="flex gap-3 text-richblack-100 text-[16px] font-inter font-medium">
          {user && user?.accountType != "Instructor" && (
            <Link to={"/dashboard/cart"}>
              {/* insert here no of cart items */}
            </Link>
          )}

          {token == null && (
            <div className="flex gap-3 text-richblack-100 text-[16px] font-inter font-medium">
              <Link
                to={"/login"}
                className="rounded-lg border py-2 px-3 bg-richblack-800 border-richblack-700 cursor-pointer"
              >
                Log in
              </Link>
              <Link
                to={"/signup"}
                className="rounded-lg border py-2 px-3 bg-richblack-800 border-richblack-700 cursor-pointer"
              >
                Sign up
              </Link>
            </div>
          )}

          {token != null && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
