import HeroSection from "./HeroSection";
import Navbar from "./NavBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
