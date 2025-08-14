import React from "react";

const PageLoader = () => (
  <div className="flex h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center">
      <Truck size={100} className="mb-4 animate-pulse text-orange-500" />
      <div className="flex space-x-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-orange-500"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-orange-500 animation-delay-200"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-orange-500 animation-delay-400"></div>
      </div>
    </div>
  </div>
);

export default PageLoader;
