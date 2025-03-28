import React from "react";

const HotTopics = () => {
  return (
    <section className="max-w-7xl mx-auto px- py-1">
      <div className="mt-2 ">
        <div className="flex items-center justify-between">
          <h2 className="text-sm md:text-md font-bold">BUSINESS</h2>
          <div className="flex-1 border-t border-gray-300 mx-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="space-y-4 pr-3 border-r m border-gray-300"
            >
              <img
                src={`https://fox.withemes.com/times/wp-content/uploads/sites/23/2015/04/man-in-white-tank-top-4143436-480x384.jpg`}
                alt="Business Post"
                className="w-full h-48 object-cover"
              />
              <p className="text-blue-900 font-bold text-xs text-start mb-2">
                BUSINESS
              </p>
              <h3 className="text-lg font-bold text-start mb-2">
                Sample Business Post Title {item}
              </h3>
              <p className="text-gray-500 text-sm text-start mb-2">
                April {10 + item}
              </p>
              <p className="text-gray-600 text-sm text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate justo at velit viverra.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotTopics;
