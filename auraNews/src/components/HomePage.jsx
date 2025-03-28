import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HotTopics from "./HotTopics";
import Navbar from "./NavBar";
import React, { useEffect, useState } from "react";
import ShimmerNewsGrid from "./ShimmerNewsGrid";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=ae151eb321754ebc9dfb35f5ffcd2c4f";

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setNews(data?.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ShimmerNewsGrid />;
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
