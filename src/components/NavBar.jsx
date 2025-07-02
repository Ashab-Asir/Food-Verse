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
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black transition-all duration-300 ease-in-out">
          <NavLink to="/" className="block hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/featured" className="block hover:text-gray-400">
            Featured
          </NavLink>
          <NavLink to="/testimonials" className="block hover:text-gray-400">
            Testimonials
          </NavLink>
          <NavLink to="/contact" className="block hover:text-gray-400">
            Contact
          </NavLink>
          <NavLink to="/favourites" className="block hover:text-gray-400">
            Favourite
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
