import React from "react";

import Footer from "../components/common/Footer";
import ContactUsForm from "../components/common/ContactUsForm";

const About: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[var(--color-richblack-900)] text-[var(--color-richblack-5)] font-[var(--font-inter)] pb-24 overflow-hidden z-0">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-blue-400)] rounded-full blur-[150px] opacity-20 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-pink-600)] rounded-full blur-[150px] opacity-10 -z-10 pointer-events-none"></div>

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="pt-24 px-4 mx-auto max-w-[var(--container-maxContent)] relative">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-richblack-700)] bg-[var(--color-richblack-800)]/50 backdrop-blur-md text-[var(--color-richblack-200)] text-sm font-medium tracking-wide mx-auto flex w-max cursor-default hover:border-[var(--color-richblack-500)] transition-colors duration-300">
          ✨ Discover Our Story
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-center max-w-3xl mx-auto leading-tight mb-6 text-[var(--color-richblack-5)]">
          Driving Innovation in Online Education for a{" "}
          <span className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
            Brighter Future
            {/* Subtle underline that expands on hover */}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color-blue-100)] rounded-full transition-all duration-500 group-hover:w-full"></span>
          </span>
        </h1>

        <p className="text-[var(--color-richblack-300)] text-center text-base md:text-lg max-w-2xl mx-auto mb-20 leading-relaxed">
          Studynotion is at the forefront of driving innovation in online
          education. We're passionate about creating a brighter future by
          offering cutting-edge courses and nurturing a vibrant learning
          community.
        </p>

        {/* --- Interactive Image Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ].map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-richblack-700)] bg-[var(--color-richblack-800)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-[var(--color-blue-400)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <img
                src={src}
                alt={`Student ${index + 1}`}
                className="w-full h-64 object-cover transition-all duration-700 transform group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- MODERN QUOTE SECTION ----------------- */}
      <section className="max-w-[800px] mx-auto px-4 py-28 relative z-10">
        <div className="relative p-10 rounded-3xl border border-[var(--color-richblack-700)] bg-gradient-to-b from-[var(--color-richblack-800)] to-[var(--color-richblack-900)] shadow-2xl overflow-hidden group">
          {/* Subtle glow inside the card on hover */}
          <div className="absolute inset-0 bg-[var(--color-yellow-100)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700"></div>

          <h2 className="text-2xl md:text-3xl font-medium text-center leading-relaxed relative z-10">
            <span className="text-[var(--color-richblack-500)] text-6xl font-serif absolute -top-4 -left-2 opacity-50">
              "
            </span>
            We are passionate about revolutionizing the way we learn. Our
            innovative platform combines{" "}
            <span className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
              technology
            </span>
            ,{" "}
            <span className="text-[var(--color-brown-50)] font-semibold">
              expertise
            </span>
            , and community to create an{" "}
            <span className="text-[var(--color-yellow-50)] font-semibold">
              unparalleled educational experience.
            </span>
            <span className="text-[var(--color-richblack-500)] text-6xl font-serif absolute -bottom-10 -right-2 opacity-50">
              "
            </span>
          </h2>
        </div>
      </section>

      {/* ----------------- STORY, VISION & MISSION (CARDS) ----------------- */}
      <section className="max-w-[var(--container-maxContent)] mx-auto px-4 pb-24">
        {/* Founding Story */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-pink-100)] to-[var(--color-pink-300)]">
              Our Founding Story
            </h2>
            <p className="text-[var(--color-richblack-300)] leading-relaxed text-lg">
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities.
            </p>
            <p className="text-[var(--color-richblack-300)] leading-relaxed text-lg">
              We envisioned a platform that could bridge gaps and empower
              individuals from all walks of life to unlock their full potential,
              breaking free from the walls of a traditional classroom.
            </p>
          </div>

          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-pink-500)] to-[var(--color-blue-500)] rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Founding Team"
              className="w-full h-auto object-cover rounded-xl border border-[var(--color-richblack-700)] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
            />
          </div>
        </div>

        {/* Vision & Mission Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="group relative p-8 md:p-10 rounded-2xl bg-[var(--color-richblack-800)] border border-[var(--color-richblack-700)] hover:border-[var(--color-yellow-100)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(231,192,9,0.15)]">
            <div className="w-12 h-12 rounded-full bg-[var(--color-yellow-100)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👁️</span>
            </div>
            <h2 className="text-2xl font-semibold text-[var(--color-yellow-100)] mb-4">
              Our Vision
            </h2>
            <p className="text-[var(--color-richblack-300)] leading-relaxed">
              We set out on a journey to create an e-learning platform that
              would revolutionize the way people learn. Our team worked
              tirelessly to develop a robust platform that combines cutting-edge
              technology with engaging content.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group relative p-8 md:p-10 rounded-2xl bg-[var(--color-richblack-800)] border border-[var(--color-richblack-700)] hover:border-[var(--color-blue-100)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(71,165,197,0.15)]">
            <div className="w-12 h-12 rounded-full bg-[var(--color-blue-100)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-2xl font-semibold text-[var(--color-blue-100)] mb-4">
              Our Mission
            </h2>
            <p className="text-[var(--color-richblack-300)] leading-relaxed">
              Our mission goes beyond just delivering courses. We create a
              vibrant community of learners where individuals can connect,
              collaborate, and learn from one another through forums, live
              sessions, and networking.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- CONTACT FORM ----------------- */}
      <ContactUsForm />

      {/* ----------------- Reviews from other learners ----------------- */}

      {/* ----------------- Reviews from other learners ----------------- */}

      {/* ----------------- FOOTER ----------------- */}
      <Footer />
    </div>
  );
};

export default About;
