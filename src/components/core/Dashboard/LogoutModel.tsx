import { useNavigate, type NavigateFunction } from "react-router-dom";

const LogoutModel = ({ setLogoutModel, logout }: LogoutModelProps) => {
  const navigate = useNavigate();

  function handleLogout(): void {
    logout(navigate);
    setLogoutModel(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-[#1c1c28] border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-xl shadow-black/40 text-white">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-4 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
            />
          </svg>
        </div>

        {/* Text */}
        <h2 className="text-center text-lg font-semibold text-white mb-1">
          Log Out
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Are you sure you want to log out of your account?
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setLogoutModel(false)}
            className="flex-1 py-2 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 py-2 rounded-xl text-sm font-medium bg-yellow-400 text-black hover:bg-yellow-300 transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModel;

type LogoutModelProps = {
  setLogoutModel: (data: boolean) => void;
  logout: (data: NavigateFunction) => void;
};
