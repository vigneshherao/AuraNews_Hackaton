import React, { useEffect, useState } from "react";
import ShimmerNewsGrid from "./ShimmerNewsGrid";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=ae151eb321754ebc9dfb35f5ffcd2c4f";

const NewsDetails = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setNewsData(data?.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ShimmerNewsGrid />;
  }

  const mainArticle = newsData[0] || {};
  const sideArticle1 = newsData[1] || {};
  const sideArticle2 = newsData[2] || {};
  const sideArticle3 = newsData[3] || {};

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="hidden md:block col-span-1 space-y-6">
        <div>
          {sideArticle1.urlToImage && (
            <img
              src={sideArticle1.urlToImage}
              alt="Article Thumbnail"
              className="w-full"
            />
          )}
          <h3 className="font-bold text-lg mt-2 text-start">
            {sideArticle1.title}
          </h3>
          <p className="text-sm text-gray-600 text-start">
            {sideArticle1.publishedAt
              ? new Date(sideArticle1.publishedAt).toISOString().split("T")[0]
              : ""}
          </p>
          <p className="text-gray-700 mt-2 text-start">
            {sideArticle1.description}
          </p>
          <a
            href={sideArticle1.url}
            className="text-blue-600 mt-2 inline-block"
          >
            READ MORE
          </a>
        </div>
      </div>
      <div className="md:col-span-2 text-center border-x border-gray-400 px-3">
        {mainArticle.urlToImage && (
          <img
            src={mainArticle.urlToImage}
            alt="Hero Section"
            className="w-full"
          />
        )}
        <p className="text-blue-900 uppercase font-inter font-semibold text-[0.7rem] mt-4">
          {mainArticle.source?.name || "News"}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold font-inter">
          {mainArticle.title}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          {mainArticle.publishedAt
            ? new Date(mainArticle.publishedAt).toISOString().split("T")[0]
            : ""}
        </p>
        <p className="text-gray-700 mt-4">
          {mainArticle.content?.slice(0, 200) +
            "LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment.LONDON (AP) King Charles III smiled and waved to members of the public Friday as he left his home in London, the day after a brief hospitalization for the side effects from his cancer treatment." ||
            "No content available."}
        </p>
      </div>
      <div className="hidden md:block col-span-1 space-y-6">
        {[sideArticle2, sideArticle3].map((article, index) =>
          article.urlToImage ? (
            <div key={index}>
              <img
                src={article.urlToImage}
                alt="Article Thumbnail"
                className="w-full"
              />
              <h3 className="font-bold text-start text-lg mt-2">
                {article.title}
              </h3>
              <p className="text-gray-700 text-start mt-2 text-sm">
                {article.description}
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
