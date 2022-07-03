import React from "react";

const Banner = () => {
  return (
    <div className="bg-yellow-500 border-y border-black py-10 lg:py-0">
      <div className="flex justify-between px-4 py-10 max-w-7xl max-h-[28rem] mx-auto items-center">
        <div className="flex flex-col space-y-[3rem] justify-center">
          <div className="font-serif font-bold text-8xl max-w-3xl">
            <h1>Stay Curious.</h1>
          </div>

          <div className="font-medium text-xl">
            <h2>Discover stories, thinking, and expertise</h2>
            <h2>from writers on any topic.</h2>
          </div>
          <div>
            <button className="text-white bg-black rounded-full px-50 py-30 w-48 h-11 text-xl items-center">
              Start Reading
            </button>
          </div>
        </div>
        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="medium logo"
        ></img>
      </div>
    </div>
  );
};

export default Banner;
