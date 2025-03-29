import React from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoMastodon } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b shadow-sm w-full border-gray-400">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl md:hidden"
          >
            <FiMenu />
          </button>
        </div>
        <div className="flex md:flex items-center gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-lg cursor-pointer hover:text-blue-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
        </div>

        <div className="hidden md:hidden items-center gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-lg cursor-pointer hover:text-blue-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-lg cursor-pointer hover:text-pink-600" />
          </a>
          <a
            href="https://mastodon.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoMastodon className="text-lg cursor-pointer hover:text-purple-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/ishansharma7390/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGlobalLine className="text-lg cursor-pointer hover:text-blue-800" />
          </a>
        </div>

        <h1 className="text-4xl text-center font-inter font-semibold">
          AuraNews
        </h1>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-lg cursor-pointer hover:text-blue-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg cursor-pointer hover:text-blue-400" />
          </a>
        </div>
      </div>
      <nav className=" hidden md:block border-t border-gray-400">
        <Marquee>
          <p className="text-lg text-blue-700 font-semibold text-center px-6 py-4   border-blue-500">
            This is the{" "}
            <span className="text-blue-900 font-bold">
              Aura News Hackathon Project
            </span>{" "}
            project, where innovation meets journalism. A heartfelt thank you to{" "}
            <span className="text-blue-900 font-bold">Outlier</span> for giving
            us this incredible opportunity to participate and showcase our
            skills.
          </p>
        </Marquee>
      </nav>
    </header>
  );
};

export default Navbar;
