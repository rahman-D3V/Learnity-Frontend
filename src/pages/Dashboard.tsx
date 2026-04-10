import { Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useProfileStore } from "../store/useProfileStore";
import Sidebar from "../components/core/Dashboard/Sidebar";
import { logout } from "../services/opeartions/authApi";
import LogoutModel from "../components/core/Dashboard/LogoutModel";

const Dashboard = () => {
  const authLoading = useAuthStore((s) => s.loading);
  const profileLoading = useProfileStore((s) => s.loading);

  const logoutModel = useAuthStore((s) => s.logoutModel);
  const setLogoutModel = useAuthStore((s) => s.setLogoutModel);

  if (authLoading || profileLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative flex   min-h-[calc(100vh-3.6rem)]">
      <Sidebar />
      <div className="bg-black w-full">
        <div className=" w-[80%] mx-auto">
          <Outlet />
        </div>

        {logoutModel && (
          <LogoutModel logout={logout} setLogoutModel={setLogoutModel} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
