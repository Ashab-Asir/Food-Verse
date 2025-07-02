import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import Drawer from "./Drawer";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-[#fdf2e9] text-[#2e1907] shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <Link to="/" className="text-xl font-bold">
          Food Verse
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-sm uppercase font-semibold">
            <NavLink to="/" className="hover:text-[#e67e22] transition">
              Home
            </NavLink>
            <NavLink to="/menu" className="hover:text-[#e67e22] transition">
              Menu
            </NavLink>
          </nav>
          <div className="hidden md:block">
            <button
              className="flex items-center gap-2 px-3 py-1 bg-white text-orange-600 rounded hover:bg-orange-100"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Heart className="w-5 h-5" />
              Favorites
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#fdf2e9] text-[#2e1907] z-50 transform transition-transform duration-300 ease-in-out ${
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
            className="hover:text-[#e67e22]"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            to="/menu"
            className="hover:text-[#e67e22]"
          >
            Menu
          </NavLink>

          <button
            className="flex items-center gap-2 px-3 py-1 bg-white text-orange-600 rounded hover:bg-orange-100"
            onClick={() => {
              setIsDrawerOpen(true);
              setMenuOpen(false);
            }}
          >
            <Heart className="w-5 h-5" />
            Favorites
          </button>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <p>No favorites added yet.</p>
      </Drawer>
    </div>
  );
};

export default NavBar;
