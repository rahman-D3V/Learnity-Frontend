import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { CgSpinner } from "react-icons/cg";

const Contact = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-3.6rem)] bg-[var(--color-richblack-900)] text-[var(--color-richblack-5)] font-[var(--font-inter)] py-20 overflow-hidden z-0 flex items-center justify-center">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-blue-600)] rounded-full blur-[150px] opacity-30 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-pink-800)] rounded-full blur-[150px] opacity-20 -z-10 pointer-events-none"></div>

      <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Card Container */}
        <div className="bg-[var(--color-richblack-800)]/80 backdrop-blur-xl border border-[var(--color-richblack-700)] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* ---------------- LEFT SIDE: Contact Info ---------------- */}
          <div className="lg:w-2/5 p-10 lg:p-14 bg-gradient-to-br from-[var(--color-richblack-800)] to-[var(--color-richblack-900)] relative overflow-hidden flex flex-col justify-between">
            {/* Decorative background element */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 border-[1px] border-[var(--color-richblack-700)] rounded-full opacity-50 pointer-events-none"></div>
            <div className="absolute top-1/2 -right-12 w-32 h-32 border-[1px] border-[var(--color-richblack-700)] rounded-full opacity-50 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                Let's chat.
              </h2>
              <p className="text-[var(--color-richblack-300)] leading-relaxed mb-12">
                Whether you have a question about our courses, pricing, or
                anything else, our team is ready to answer all your questions.
              </p>

              <div className="flex flex-col gap-8">
                {/* Email Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-richblack-700)]/50 border border-[var(--color-richblack-600)] flex items-center justify-center text-[var(--color-blue-100)] group-hover:bg-[var(--color-blue-100)] group-hover:text-[var(--color-richblack-900)] transition-all duration-300">
                    <HiOutlineMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-richblack-300)] mb-1">
                      Send us an email
                    </p>
                    <a
                      href="mailto:hello@learnity.com"
                      className="text-[var(--color-richblack-5)] font-medium hover:text-[var(--color-blue-100)] transition-colors"
                    >
                      hello@learnity.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-richblack-700)]/50 border border-[var(--color-richblack-600)] flex items-center justify-center text-[var(--color-caribbeangreen-200)] group-hover:bg-[var(--color-caribbeangreen-200)] group-hover:text-[var(--color-richblack-900)] transition-all duration-300">
                    <HiOutlineLocationMarker className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-richblack-300)] mb-1">
                      Visit our office
                    </p>
                    <p className="text-[var(--color-richblack-5)] font-medium">
                      123 Innovation Drive
                      <br />
                      Tech Hub, CA 94103
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-richblack-700)]/50 border border-[var(--color-richblack-600)] flex items-center justify-center text-[var(--color-yellow-100)] group-hover:bg-[var(--color-yellow-100)] group-hover:text-[var(--color-richblack-900)] transition-all duration-300">
                    <HiOutlinePhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-richblack-300)] mb-1">
                      Call us directly
                    </p>
                    <a
                      href="tel:+18001234567"
                      className="text-[var(--color-richblack-5)] font-medium hover:text-[var(--color-yellow-100)] transition-colors"
                    >
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT SIDE: The Form ---------------- */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-[var(--color-richblack-800)]/40 relative">
            <form className="flex flex-col gap-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {/* First Name */}
                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="fname"
                    className="text-xs font-semibold uppercase tracking-wider text-[var(--color-richblack-300)] ml-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    placeholder="John"
                    className="w-full bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-xl px-4 py-3 text-[var(--color-richblack-5)] placeholder:text-[var(--color-richblack-600)] outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:ring-4 focus:ring-[var(--color-blue-100)]/10"
                    required
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="lname"
                    className="text-xs font-semibold uppercase tracking-wider text-[var(--color-richblack-300)] ml-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    placeholder="Doe"
                    className="w-full bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-xl px-4 py-3 text-[var(--color-richblack-5)] placeholder:text-[var(--color-richblack-600)] outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:ring-4 focus:ring-[var(--color-blue-100)]/10"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--color-richblack-300)] ml-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-xl px-4 py-3 text-[var(--color-richblack-5)] placeholder:text-[var(--color-richblack-600)] outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:ring-4 focus:ring-[var(--color-blue-100)]/10"
                  required
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--color-richblack-300)] ml-1"
                >
                  Subject
                </label>
                <select
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
                  <HiOutlineChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--color-richblack-300)] ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-[var(--color-richblack-900)] border border-[var(--color-richblack-700)] rounded-xl px-4 py-3 text-[var(--color-richblack-5)] placeholder:text-[var(--color-richblack-600)] outline-none transition-all duration-300 focus:border-[var(--color-blue-100)] focus:ring-4 focus:ring-[var(--color-blue-100)]/10 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full bg-yellow-200 text-[var(--color-richblack-900)] font-bold text-lg px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-yellow-50 hover:shadow-[0_0_20px_rgba(71,165,197,0.3)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
