import { sidebarLinks } from "../../../data/dashboard-links";
import { useProfileStore } from "../../../store/useProfileStore";
import { useAuthStore } from "../../../store/useAuthStore";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const profileLoading = useProfileStore((s) => s.loading);
  const user = useProfileStore((s) => s.user);
  const authLoading = useAuthStore((s) => s.loading);
  const setLogoutModel = useAuthStore((s) => s.setLogoutModel);

  const params = useLocation();
  const path = params.pathname;

  const navigate = useNavigate();

  const handleLogoutClick = () => setLogoutModel(true);

  if (authLoading || profileLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-[calc(100vh-3.6rem)] w-[222px] py-8 flex flex-col gap-3 border border-richblack-700 bg-richblack-800 ">
      <div className="w-full flex flex-col ">
        {sidebarLinks.map((item) =>
          item.type && user?.accountType !== item.type ? null : (
            <SidebarLink
              key={item.id}
              iconPath={item.path}
              Icon={item.icon}
              name={item.name}
              navigate={navigate}
              path={path}
            />
          ),
        )}
      </div>

      <hr className="w-[90%]  text-richblack-600 text-center mx-auto" />

      <div className="w-full flex flex-col ">
        <div
          onClick={() => navigate("/dashboard/setting")}
          className={`w-full py-2 px-6 flex gap-3 items-center text-richblack-300 font-inter font-medium text-[14px] hover:bg-richblack-700 cursor-pointer ${path == "/dashboard/setting" ? "bg-yellow-800 cursor-default border-l-2 border-yellow-50 text-yellow-50 hover:bg-yellow-800" : "cursor-pointer"}`}
        >
          <IoSettingsOutline />

          <p>Settings</p>
        </div>
        <div
          onClick={handleLogoutClick}
          className="w-full py-2 px-6 flex gap-3 items-center text-richblack-300 font-inter font-medium text-[14px] hover:bg-richblack-700 cursor-pointer"
        >
          <IoIosLogOut />

          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
