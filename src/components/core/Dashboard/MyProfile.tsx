import { Link } from "react-router-dom"
import { useProfileStore } from "../../../store/useProfileStore"

const MyProfile = () => {
  const user = useProfileStore((s) => s.user)
  return (
    <div className="w-full px-4 py-8">

      <h1 className="text-2xl font-bold text-white mb-8">My Profile</h1>


      {/* SECTION 1 — Avatar & Basic Info */}
      <div className="flex items-center justify-between bg-[#1c1c28] border border-white/10 rounded-2xl p-5 mb-4">
        <div className="flex gap-4 items-center">
          <img
            src={user?.image}
            alt="avatar"
            className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-400/50"
          />
          <div>
            <p className="text-white font-semibold text-base">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-gray-400 text-sm mt-0.5">{user?.email}</p>
          </div>
        </div>
        <Link
          to="/dashboard/setting"
          className="text-xs font-medium text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors px-4 py-1.5 rounded-lg"
        >
          Edit
        </Link>
      </div>


      {/* SECTION 2 — About */}
      <div className="flex items-start justify-between bg-[#1c1c28] border border-white/10 rounded-2xl p-5 mb-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-yellow-400/70 mb-1">About</p>
          <p className="text-sm text-gray-300 max-w-prose leading-relaxed">
            {user?.additionalDetails?.about ?? (
              <span className="text-gray-500 italic">Write something about yourself…</span>
            )}
          </p>
        </div>
        <Link
          to="/dashboard/setting"
          className="text-xs font-medium text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors px-4 py-1.5 rounded-lg shrink-0 ml-4"
        >
          Edit
        </Link>
      </div>


      {/* SECTION 3 — Personal Details */}
      <div className="bg-[#1c1c28] border border-white/10 rounded-2xl p-5">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-semibold text-base">Personal Details</h2>
          <Link
            to="/dashboard/setting"
            className="text-xs font-medium text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors px-4 py-1.5 rounded-lg"
          >
            Edit
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">

          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-400/70 mb-1">First Name</p>
            <p className="text-white text-sm font-medium">{user?.firstName}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-400/70 mb-1">Last Name</p>
            <p className="text-white text-sm font-medium">{user?.lastName}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-400/70 mb-1">Email</p>
            <p className="text-white text-sm font-medium">{user?.email}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-400/70 mb-1">Phone</p>
            <p className="text-sm font-medium text-white">
              {user?.additionalDetails?.contactNumber ?? (
                <span className="text-gray-500 italic">Add contact number</span>
              )}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-400/70 mb-1">Gender</p>
            <p className="text-sm font-medium text-white">
              {user?.additionalDetails?.gender ?? (
                <span className="text-gray-500 italic">Add gender</span>
              )}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-400/70 mb-1">Date of Birth</p>
            <p className="text-sm font-medium text-white">
              {user?.additionalDetails?.dateOfBirth ?? (
                <span className="text-gray-500 italic">Add date of birth</span>
              )}
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default MyProfile