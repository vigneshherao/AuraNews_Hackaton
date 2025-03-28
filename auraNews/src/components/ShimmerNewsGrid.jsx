import React from "react";
export const ShimmerCard = () => {
  return (
    <div className="animate-pulse bg-gray-300 p-4  rounded-lg shadow-lg w-full max-w-sm">
      <div className="h-48 bg-gray-300 rounded"></div>
      <div className="mt-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mt-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
      </div>
    </div>
  );
};

const ShimmerNavbar = () => {
  return (
    <header className="border-b shadow-sm w-full border-gray-400 animate-pulse">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="md:hidden flex items-center gap-4">
          <div className="w-6 h-6 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex md:hidden items-center gap-3">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-6 h-6 bg-gray-300 rounded-full"></div>
          ))}
        </div>
        <div className="w-32 h-8 bg-gray-300 rounded-md"></div>
        <div className="hidden md:flex items-center gap-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-6 h-6 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      </div>
      <nav className="hidden md:block border-t border-gray-400">
        <ul className="flex justify-center gap-6 py-3">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="w-20 h-4 bg-gray-300 rounded-md"></div>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const ShimmerNewsGrid = () => {
  return (
    <>
      <ShimmerNavbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {[...Array(5)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
        {[...Array(5)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </>
  );
};

export default ShimmerNewsGrid;
