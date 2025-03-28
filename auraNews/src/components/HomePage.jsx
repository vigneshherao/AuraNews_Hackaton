import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HotTopics from "./HotTopics";
import Navbar from "./NavBar";
import React, { useEffect, useState } from "react";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=ae151eb321754ebc9dfb35f5ffcd2c4f";

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(url);
    const data = await result.json();
    setNews(data?.articles);
    console.log(data);
  };

  if (!news) {
    return <h2>NO DATA</h2>;
  }

  return (
    <div className="w-full h-full bg-gray-100">
      <Navbar />
      <HeroSection newsData={news[0]} />
      <HotTopics newsData={news.slice(5, 10)} />
      <Footer />
    </div>
  );
};

export default HomePage;
