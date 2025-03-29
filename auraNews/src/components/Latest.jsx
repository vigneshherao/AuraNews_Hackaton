import React from "react";
import { Link } from "react-router-dom";
import ShimmerNewsGrid from "./ShimmerNewsGrid";

const Latest = ({ newsData }) => {
  if (!newsData) {
    return <ShimmerNewsGrid />;
  }

  const mainNews = newsData[0];
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-3">
        <div className="flex items-center">
          <h2 className="text-sm md:text-md font-bold whitespace-nowrap">
            5 MINUTE READ
          </h2>
          <div className="flex-1 border-t border-gray-300 mx-4"></div>
        </div>
      </div>
      <div className="md:col-span-2">
        <h2 className="uppercase text-sm font-bold mb-4"></h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-between">
            <img
              src={mainNews.urlToImage}
              alt="Featured"
              className="w-full md:w-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-start">
                {mainNews.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-start">
                {mainNews.description}
              </p>
            </div>
            <div className="flex justify-start items-start">
              <Link to={"/newsDetails"}>
                <button className="mt-4 px-5 py-1 bg-blue-900 text-white font-semibold rounded-sm text-sm">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {newsData.map((article, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-20 h-20 object-cover flex-shrink-0"
            />
            <div>
              <h4 className="font-semibold text-sm leading-tight">
                {article.title.length > 40
                  ? article.title.slice(0, 40) + "..."
                  : article.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{article.date}</p>
              <p className="text-xs text-gray-500 mt-1">
                {article.description.slice(0, 100)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;
