import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProfileStore } from "../../../store/useProfileStore";
import { logout } from "../../../services/opeartions/authApi";

const ProfileDropdown = () => {
  const user = useProfileStore((s) => s.user);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <img
        onClick={() => setOpen((prev) => !prev)}
        className="h-8 w-8 rounded-full object-cover ring-2 ring-yellow-400/50 cursor-pointer hover:ring-yellow-400 transition-all"
        src={user?.image}
        alt="profile"
      />

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-[#1c1c28] border border-white/10 rounded-xl shadow-xl shadow-black/40 overflow-hidden z-50">
          {/* User info */}
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-white text-sm font-semibold truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-gray-500 text-xs truncate">{user?.email}</p>
          </div>

          {/* Dashboard */}
          <button
            onClick={() => {
              navigate("/dashboard/my-profile");
              setOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15v-6h-6v6H3.75A.75.75 0 013 21V9.75z"
              />
            </svg>
            Dashboard
          </button>

          {/* Logout */}
          <button
            onClick={() => {
              logout(navigate);
              setOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-400/10 hover:text-red-300 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2v1"
              />
            </svg>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
