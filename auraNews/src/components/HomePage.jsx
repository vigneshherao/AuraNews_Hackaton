import HeroSection from "./HeroSection";
import HotTopics from "./HotTopics";
import Navbar from "./NavBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <Navbar />
      <HeroSection />
      <HotTopics />
    </div>
  );
};

export default HomePage;
