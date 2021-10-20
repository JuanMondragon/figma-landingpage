import React, { useState } from "react";

import Image from "next/image";

// import your icons

import skyline from "../public/images/logo3.png";


export const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap z-10 sticky justify-around w-screen  h-20  bg-white ">
        <div className=" md:ml-40">
          <Image src={skyline} alt="logo" width={50} height={50} />
        </div>

        <div className="float-right cursor-pointer px-4 md:hidden" id="bars">
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            
          </button>
        </div>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full bg-white md:inline-flex md:flex-grow md:w-auto`}
          id="menu"
        >
          <div className=" md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col  md:pr-5 lg:h-auto'">
            <a className="md:inline-flex md:w-auto w-full cursor-pointer px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-button hover:text-white">
              HOME
            </a>
            <a className="md:inline-flex md:w-auto w-full cursor-pointer px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-button hover:text-white">
              RECORDS
            </a>
            <a className="md:inline-flex md:w-auto w-full  cursor-pointer px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-button hover:text-white">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
