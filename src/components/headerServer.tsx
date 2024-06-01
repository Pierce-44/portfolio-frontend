import React from "react";

interface Props {
  isScrolled: boolean;
}

export default function HeaderServer({ isScrolled }: Props) {
  return (
    <div
      className={`h-14 fixed top-0 left-0 w-full ${
        isScrolled ? "h-16 shadow-lg" : "pt-16"
      } transition-all duration-700 flex justify-center z-10 bg-white`}
    >
      <div className=" w-full flex items-center justify-evenly text-3xl">
        <div className="flex gap-10">
          <button className="hover:border-[#98bfff] border-b-2 pb-1 border-white transition-all duration-500">
            Pierce Hahn
          </button>
          <div className="flex items-center justify-center gap-4">
            <button>
              <svg
                className="fill-slate-800 hover:fill-blue-400 transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </button>
            <button>
              <svg
                className="fill-slate-800 hover:fill-blue-400 transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-16">
          <button className="hover:border-[#ff9c9c] border-b-2 pb-1 border-white transition-all duration-500">
            About
          </button>
          <button className="hover:border-[#a2e089] border-b-2 pb-1 border-white transition-all duration-500">
            Skills
          </button>
          <button className="hover:border-[#ffda83] border-b-2 pb-1 border-white transition-all duration-500">
            Projects
          </button>
          <button className="hover:border-[#ffc982] border-b-2 pb-1 border-white transition-all duration-500">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
