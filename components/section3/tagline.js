import React from "react";

function Tagline() {
  return (
    <div className="bg-second text-white lg:h-screen/2">
      <div className="text-bold pt-5">
        <h1 className="text-2xl md:text-4xl font-black md:pt-5 lg:text-6xl lg:pt-8">
          Going Over Expectations
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold lg:text-5xl">
          and how we handle your orders.
        </h2>
      </div>

      <p className="font-medium md:text-2xl lg:text-4xl">
        learn how we prepare and mail our packages.
      </p>
      <div className="pt-5 pb-5 md:pb-10 md:pt-10 lg:pb-0">
        <button className="bg-transparent font-new hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-6 md:px-10 lg: px-20 xl:px-24 border border-gray-500 hover:border-transparent rounded">
          Our Process
        </button>
      </div>
    </div>
  );
}

export default Tagline;
