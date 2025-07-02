import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fdf2e9] text-[#2e1907] py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: Logo or brand */}
        <div className="text-xl font-bold">FoodVerse</div>

        {/* Center: Footer links */}
        <ul className="flex flex-wrap gap-4 text-sm font-medium">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </li>
        </ul>

        {/* Right side: copyright */}
        <div className="text-sm text-[#2e1907]">
          © {new Date().getFullYear()} FoodVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
