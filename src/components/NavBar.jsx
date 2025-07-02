import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Food Verse
        </Link>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase font-semibold">
          <NavLink to="/" className="hover:text-gray-400 transition">
            Home
          </NavLink>
          <NavLink to="/featured" className="hover:text-gray-400 transition">
            Featured
          </NavLink>
          <NavLink
            to="/testimonials"
            className="hover:text-gray-400 transition"
          >
            Testimonials
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-400 transition">
            Contact
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="hidden md:block">
          <Link to="/favourites" className="hover:text-gray-400 transition">
            Favourite
          </Link>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-6 text-lg uppercase font-semibold">
          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/"
            className="hover:text-gray-400"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/featured"
            className="hover:text-gray-400"
          >
            Featured
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/testimonials"
            className="hover:text-gray-400"
          >
            Testimonials
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/contact"
            className="hover:text-gray-400"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/favourites"
            className="hover:text-gray-400"
          >
            Favourite
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
