import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#161D29] border-t border-[#424854] text-gray-400">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-10">

        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">
              Learnity
            </h2>
            <p className="text-sm">
              Learn, build, and grow with curated tech resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-3">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <p className="hover:text-white cursor-pointer">Home</p>
              <p className="hover:text-white cursor-pointer">About</p>
              <p className="hover:text-white cursor-pointer">Contact</p>
              <p className="hover:text-white cursor-pointer">Blog</p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-3">Resources</h3>
            <div className="space-y-2 text-sm">
              <p className="hover:text-white cursor-pointer">Docs</p>
              <p className="hover:text-white cursor-pointer">Projects</p>
              <p className="hover:text-white cursor-pointer">Articles</p>
              <p className="hover:text-white cursor-pointer">Tutorials</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-medium mb-3">Follow</h3>
            <div className="flex gap-4 text-lg">
              <span className="hover:text-white cursor-pointer">🌐</span>
              <span className="hover:text-white cursor-pointer">🐦</span>
              <span className="hover:text-white cursor-pointer">💼</span>
              <span className="hover:text-white cursor-pointer">▶️</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#424854] pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex gap-5">
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Terms</p>
            <p className="hover:text-white cursor-pointer">Cookie Policy</p>
          </div>

          <p className="mt-3 md:mt-0">
            © {new Date().getFullYear()} Learnity • Made with ❤️
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;