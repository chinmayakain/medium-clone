import Link from "next/link";
import React from "react";

import MediumLogoBlack from "../assets/icons/01_Black/Full/SVG/Medium-Logo-Black-RGB.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-yellow-500 overflow-auto border-b border-black py-10 lg:py-0">
      <header className="flex justify-between px-4 py-5 max-w-7xl mx-auto ">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <MediumLogoBlack
              height={25}
              fill={"black"}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex space-x-4 font-medium text-sm">
          <div className="hidden md:inline-flex items-center space-x-5 ">
            <span>Our Story</span>
            <span>Membership</span>
            <span>Write</span>
            <span>Sign In</span>
          </div>

          <div className="text-white bg-black rounded-full px-4 py-2">
            Get Started
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
