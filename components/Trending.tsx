import React from "react";
import IconTrending from "../assets/icons/01_Black/Symbol/SVG/increase-up-profit.svg";

const Trending = () => {
  return (
    <div className="flex max-w-7xl mx-auto py-[40px]">
      <div className="flex  items-center space-x-4">
        <IconTrending height={10} fill={"black"} />
        <div className="font-medium">Trending on medium</div>
      </div>
    </div>
  );
};

export default Trending;
