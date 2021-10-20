import React from "react";


function Hero() {
  return (
    <div className=" z-50">
      <div className="flex flex-col pb-5 bg-hero bg-cover bg-no-repeat text-white max-w-full h-screen justify-center relative  lg:bg-top-4 lg:bg-cover">
        <div className="lg:pt-0">
        <h3 className="font-montse pb-5 font-black text-6xl px-3 md:text-5xl md:pb-0 lg:text-8xl  ">
          THE 6
        </h3>

        </div>
        

        <div className="relative justify-center md:pt-5 md:pb-5 lg:pt-0">
          <h2 className="font-bold text-xl md:pt-3 md:text-2xl lg:text-4xl">
            Toronto's Premium Record Store
          </h2>

          <br />
          <button className="bg-button text-white font-bold text-2xl font-new hover:bg-button  font-semibold hover:text-white py-2 px-4 border border-button hover:border-transparent rounded lg:text-5xl">
            Online Only
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
