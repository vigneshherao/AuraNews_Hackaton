import React from "react";
import ShimmerNewsGrid from "./ShimmerNewsGrid";

const HotTopics = ({ newsData }) => {
  if (!newsData) {
    return <ShimmerNewsGrid />;
  }

  return (
    <section className="max-w-7xl mx-auto px- py-1">
      <div className="mt-2 ">
        <div className="flex items-center justify-between">
          <h2 className="text-sm md:text-md font-bold">HOT TOPICS</h2>
          <div className="flex-1 border-t border-gray-300 mx-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4">
          {newsData.map((item) => (
            <div
              key={item}
              className="space-y-4 pr-3 border-r m border-gray-300"
            >
              <img
                src={item.urlToImage}
                alt="Business Post"
                className="w-full h-48 object-cover"
              />
              <p className="text-blue-900 font-bold text-xs text-start mb-2">
                Latest
              </p>
              <h3 className="text-lg font-bold text-start mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm text-start mb-2">
                {new Date(item.publishedAt).toISOString().split("T")[0]}
              </p>
              <p className="text-gray-600 text-sm text-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotTopics;
