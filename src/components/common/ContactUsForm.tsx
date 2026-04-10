import { useForm, type SubmitHandler } from "react-hook-form";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // function onSubmit(data: FormValues) {
  //   console.log(data);
  //   alert("Message sent successfully!");
  // }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[650px] mx-auto px-4 pb-24 relative z-10">
      <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-richblack-800)] border border-[var(--color-richblack-700)] shadow-2xl">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-[var(--color-richblack-300)]">
            We'd love to hear from you. Fill out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col flex-1 gap-2 group">
              <label className="text-sm text-[var(--color-richblack-200)] group-focus-within:text-[var(--color-blue-100)] transition-colors">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-lg text-[var(--color-richblack-5)] w-full p-3 outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:shadow-[0_0_10px_rgba(71,165,197,0.2)] placeholder:text-[var(--color-richblack-500)]"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm mt-1">
                  First name is required
                </span>
              )}
            </div>
            <div className="flex flex-col flex-1 gap-2 group">
              <label className="text-sm text-[var(--color-richblack-200)] group-focus-within:text-[var(--color-blue-100)] transition-colors">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-lg text-[var(--color-richblack-5)] w-full p-3 outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:shadow-[0_0_10px_rgba(71,165,197,0.2)] placeholder:text-[var(--color-richblack-500)]"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm mt-1">
                  Last name is required
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-sm text-[var(--color-richblack-200)] group-focus-within:text-[var(--color-blue-100)] transition-colors">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-lg text-[var(--color-richblack-5)] w-full p-3 outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:shadow-[0_0_10px_rgba(71,165,197,0.2)] placeholder:text-[var(--color-richblack-500)]"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                Valid email is required
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            <label
              htmlFor="subject"
              className="text-xs font-semibold uppercase tracking-wider text-[var(--color-richblack-300)] ml-1"
            >
              Subject
            </label>
            <select
              {...register("subject", { required: true })}
              id="subject"
              className="w-full bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-xl px-4 py-3 text-[var(--color-richblack-5)] outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:ring-4 focus:ring-[var(--color-blue-100)]/10 appearance-none cursor-pointer"
            >
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="feedback">Product Feedback</option>
            </select>
            {/* Custom dropdown arrow to replace the default browser one */}
            <div className="absolute right-4 top-[38px] pointer-events-none text-[var(--color-richblack-400)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {errors.subject && (
              <span className="text-red-500 text-sm mt-1">
                Subject is required
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-sm text-[var(--color-richblack-200)] group-focus-within:text-[var(--color-blue-100)] transition-colors">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-lg text-[var(--color-richblack-5)] w-full p-3 outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:shadow-[0_0_10px_rgba(71,165,197,0.2)] placeholder:text-[var(--color-richblack-500)] resize-y"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                Message is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 relative overflow-hidden group bg-[var(--color-yellow-50)] text-[var(--color-richblack-900)] text-[16px] px-6 py-3.5 rounded-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,214,10,0.4)]"
          >
            {/* Shine effect on button hover */}
            <span className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/30 skew-x-12 group-hover:left-[200%] transition-all duration-700 ease-out"></span>
            <span className="relative z-10">Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};
