import React from "react";
import ShimmerNewsGrid from "./ShimmerNewsGrid";

const HeroSection = ({ newsData }) => {
  if (!newsData) {
    return <ShimmerNewsGrid />;
  }
  const { description, publishedAt, title, urlToImage, content } = newsData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="hidden md:block col-span-1 space-y-6">
        <div>
          <img
            src={newsData[1].urlToImage}
            alt="Article Thumbnail"
            className="w-full"
          />
          <h3 className="font-bold text-lg mt-2 text-start">
            {newsData[1].title}
          </h3>
          <p className="text-sm text-gray-600 text-start">
            {new Date(newsData[1].publishedAt).toISOString().split("T")[0]}{" "}
          </p>
          <p className="text-gray-700 mt-2 text-start">
            Usu tantas omittantur ut, per te modo appetere senserit. Ei ius
            aperiam tincidunt, ea sit natum iisque repudiandae. Ea nec wisi
            facete. Ex hinc rebum omittam his. Enim dolore meliore ea mea. Ius
            ei minim possit intellegat, an sea ornatus natum iisque repudiandae.
            Ea nec wisi facete. Ex hinc rebum omittam his. intellegat, an sea
            ornatus ttam his. Enim dolore meliore ea mea. Ius ei minim possit
            intellegat, an sea ornatus natum iisque repudiandae.
          </p>
          <a href="#" className="text-gray-500 mt-2 inline-block">
            READ MORE
          </a>
        </div>
      </div>
      <div className="md:col-span-2 text-center border-x border-gray-400 px-3">
        <img src={urlToImage} alt="Hero Section" className="w-full" />
        <p className="text-blue-900 uppercase font-inter font-semibold text-[0.7rem] mt-4">
          Opinion
        </p>
        <h1 className="text-2xl md:text-3xl font-bold font-inter">{title}</h1>
        <p className="text-gray-500 text-sm mt-2">
          {new Date(publishedAt).toISOString().split("T")[0]}{" "}
        </p>
        <p className="text-gray-700 mt-4">{content.slice(0, 200)}</p>
        <button className="mt-4 px-5 py-1 bg-blue-900 text-white font-semibold rounded-sm text-sm">
          READ MORE
        </button>
      </div>
      <div className="hidden md:block col-span-1 space-y-6">
        <div>
          <img
            src={newsData[2].urlToImage}
            alt="Article Thumbnail"
            className="w-full"
          />
          <h3 className="font-bold text-start text-lg mt-2">
            {newsData[2].title}
          </h3>
          <p className="text-gray-700 text-start mt-2 text-sm">
            {newsData[2].description}
          </p>
        </div>
        <div>
          <img
            src={newsData[3].urlToImage}
            alt="Article Thumbnail"
            className="w-full"
          />
          <h3 className="font-bold text-start  text-lg mt-2">
            {newsData[3].title}
          </h3>
          <p className="text-gray-700 text-start mt-2 text-sm">
            {newsData[3].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
