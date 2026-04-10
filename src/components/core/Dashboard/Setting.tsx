import { Link, useNavigate } from "react-router-dom";
import { useProfileStore } from "../../../store/useProfileStore";
import { useRef, useState, type ChangeEvent } from "react";
import {
  updateProfileDetails,
  updateProfilePicture,
} from "../../../services/opeartions/profileApi";
import { useForm, type SubmitHandler } from "react-hook-form";
import { changePassword } from "../../../services/opeartions/authApi";
import { ImSpinner10 } from "react-icons/im";

const Setting = () => {
  const [fileUploading, setFileUploading] = useState(false);
  const user = useProfileStore((s) => s.user);
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);

  const handlePasswordChange = () => {
    changePassword(
      currentPassword,
      newPassword,
      navigate,
      setIsPasswordChanging,
    );
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files?.[0]);

    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    updateProfilePicture(formData, setFileUploading);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      dateOfBirth: user?.additionalDetails?.dateOfBirth || "",
      gender: user?.additionalDetails?.gender || "",
      contactNumber: user?.additionalDetails?.contactNumber || "",
      about: user?.additionalDetails?.about || "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    const { about, contactNumber, dateOfBirth, firstName, gender, lastName } =
      data;

    updateProfileDetails(
      about,
      contactNumber,
      dateOfBirth,
      firstName,
      gender,
      lastName,
      navigate,
    );
  };

  return (
    <div className="w-full px-6 py-8 text-white">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      {/* SECTION 1 — Profile Picture */}
      <div className="bg-[#1c1c28] border border-white/10 rounded-2xl p-5 mb-4 flex items-center gap-5">
        <img
          src={user?.image}
          alt="avatar"
          className="h-16 w-16 rounded-full object-cover ring-2 ring-yellow-400/60 shrink-0"
        />
        <div>
          <p className="text-white font-semibold text-sm mb-3">
            Profile Picture
          </p>
          <div className="flex gap-3">
            <input
              type="file"
              id="imageUpload"
              onChange={handleFileUpload}
              name="image"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
            />
            <button
              className="text-sm font-medium text-black bg-richblack-500 hover:bg-richblack-300 transition-colors px-4 py-1.5 rounded-lg"
              onClick={handleClick}
            >
              Select
            </button>
            <button className="text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition-colors px-4 py-1.5 rounded-lg">
              {fileUploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
      {/* className="text-sm font-medium text-gray-300 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors px-4 py-1.5 rounded-lg" */}

      {/* SECTION 2 — Profile Information */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#1c1c28] border border-white/10 rounded-2xl p-5 mb-4"
      >
        <h2 className="text-white font-semibold text-base mb-5">
          Profile Information
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-yellow-400/80">
              First Name
            </label>
            <input
              type="text"
              className="bg-[#13131a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              {...register("firstName", { required: "First Name is required" })}
            />
            {errors.firstName && (
              <p className="text-xs mt-1 text-red-400">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-yellow-400/80">
              Last Name
            </label>
            <input
              type="text"
              className="bg-[#13131a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && (
              <p className="text-xs mt-1 text-red-400">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-yellow-400/80">
              Date of Birth
            </label>
            <input
              type="date"
              className="bg-[#13131a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              {...register("dateOfBirth", {
                required: "Date of Birth is required",
              })}
            />
            {errors.dateOfBirth && (
              <p className="text-xs mt-1 text-red-400">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-yellow-400/80">
              Gender
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              name="gender"
              className="bg-[#13131a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-400/50 transition-colors"
            >
              <option selected disabled>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-xs mt-1 text-red-400">
                {errors.gender.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-yellow-400/80">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter contact number"
              className="bg-[#13131a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              {...register("contactNumber", {
                required: "Contact number is required",
              })}
            />
            {errors.contactNumber && (
              <p className="text-xs mt-1 text-red-400">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-yellow-400/80">
              About
            </label>
            <input
              type="text"
              placeholder="Enter bio details"
              className="bg-[#13131a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              {...register("about", { required: "About is required" })}
            />
            {errors.about && (
              <p className="text-xs mt-1 text-red-400">
                {errors.about.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            to="/dashboard/my-profile"
            className="text-sm font-medium text-gray-300 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors px-5 py-2 rounded-lg"
          >
            Cancel
          </Link>
          <button
            disabled={!isDirty}
            type="submit"
            className="text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition-colors px-5 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </form>

      {/* SECTION 3 — Password */}
      <div className="bg-[#1c1c28] border border-white/10 rounded-2xl p-5">
        <h2 className="text-white font-semibold text-base mb-5">Password</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-yellow-400/80">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              placeholder="Enter current password"
              className="bg-[#13131a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-yellow-400/80">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              className="bg-[#13131a] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            to="/dashboard/my-profile"
            className="text-sm font-medium text-gray-300 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors px-5 py-2 rounded-lg"
          >
            Cancel
          </Link>
          <button
            onClick={handlePasswordChange}
            className="text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition-colors px-5 py-2 rounded-lg"
          >
            {isPasswordChanging ? (
              <ImSpinner10 className="animate-spin" size={19} />
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;

type FormValues = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  contactNumber: string;
  about: string;
};
