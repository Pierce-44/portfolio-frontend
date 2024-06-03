"use client";

import React from "react";
import Image from "next/image";

interface Props {
  coverPageRef: React.RefObject<HTMLDivElement>;
}

export default function CoverPage({ coverPageRef }: Props) {
  return (
    <div ref={coverPageRef} className=" h-full flex overflow-hidden ">
      <div className="flex items-center justify-evenly w-full mb-20 max-md:flex-col-reverse max-md:justify-center max-md:gap-10">
        <div className="space-y-3">
          <p className="text-[#6ca5ff] font-bold text-lg">{`Hello, I'm`}</p>
          <p className="font-extrabold text-7xl max-sm:text-4xl">Pierce Hahn</p>
          <p className="font-bold text-2xl">Full-Stack Web Developer</p>
          <div className="font-semibold space-x-4 text-[#424242]">
            <button className="bg-[#6ca5ff] text-white rounded-full border-4 border-[#6ca5ff] p-4 hover:bg-[#354a6d] transition-all duration-300 max-sm:p-2">
              Download CV
            </button>
            <button className="border-4 border-[#c5e0fd] rounded-full p-4 hover:bg-[#bad3ff] transition-all duration-300 max-sm:p-2">
              Contact Info
            </button>
          </div>
        </div>
        <div className="bg-[#c5e0fd] h-[50vh] w-[50vh] rounded-full relative flex items-center justify-center max-xl:w-[30vh] max-xl:h-[30vh] max-md:w-[20vh] max-md:h-[20vh]">
          <div className=" bg-[#98bfffa1] h-[94%] w-[94%] rounded-full max-md:w-[90%] max-md:h-[90%]">
            <Image
              alt="profile picture"
              fill
              className="p-7 object-contain rounded-full"
              src="https://avatars.githubusercontent.com/u/96740762?v=4"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
