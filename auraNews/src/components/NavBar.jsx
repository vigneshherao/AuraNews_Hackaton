import React from "react";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoMastodon } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b shadow-sm bg-white w-full">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl md:hidden"
          >
            <FiMenu />
          </button>
        </div>
        <div className="flex md:hidden items-center gap-3">
          <FaFacebookF className="text-lg" />
          <FaTwitter className="text-lg" />
          <FaInstagram className="text-lg" />
        </div>

        <div className="hidden md:flex items-center gap-3">
          <FaFacebookF className="text-lg" />
          <FaTwitter className="text-lg" />
          <FaInstagram className="text-lg" />
          <IoLogoMastodon className="text-lg" />
          <RiGlobalLine className="text-lg" />
        </div>
        <h1 className="text-4xl text-center font-inter font-semibold">
          AuraNews
        </h1>
        <div className="hidden md:flex items-center gap-3">
          <FaFacebookF className="text-lg" />
          <FaTwitter className="text-lg" />
          <FaInstagram className="text-lg" />
          <IoLogoMastodon className="text-lg" />
          <RiGlobalLine className="text-lg" />
        </div>
      </div>
      <nav className=" hidden md:block border-t">
        <ul className="flex justify-center gap-6 py-3 text-sm font-medium uppercase">
          <li className="border-b-2 border-black pb-1">Home</li>
          <li>Dark Mode</li>
          <li>About</li>
          <li>Posts +</li>
          <li>Business +</li>
          <li>Interview +</li>
          <li>Politics +</li>
          <li>Travel +</li>
          <li>Contact</li>
          <li>Shop +</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
