"use client";
import useScrolled from "@/hooks/useScrolled";
import Link from "next/link";
import React from "react";

interface Props {
  coverPageRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  mySkillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  coverPageRef,
  aboutMeRef,
  mySkillsRef,
  projectsRef,
  contactRef,
  darkMode,
  setDarkMode,
}: Props) {
  // checks if the page has been scrolled
  const scrolled = useScrolled();

  return (
    <div
      className={`h-14 fixed top-0 left-0 w-full ${
        scrolled.isScrolled
          ? "h-16 shadow-lg dark:bg-gray-700 bg-white"
          : "pt-16"
      } transition-all duration-700 flex justify-center z-10 max-w-[100vw] `}
    >
      <div className=" w-full flex items-center justify-evenly text-3xl max-lg:text-xl max-md:text-base max-md:justify-between max-md:px-10 max-[500px]:px-2 dark:text-gray-100">
        <div className="flex gap-10 max-lg:gap-0">
          <button
            onClick={() => {
              if (coverPageRef.current) {
                coverPageRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hover:border-[#98bfff] border-b-2 pb-1 border-[#00000000] transition-all duration-500 max-lg:hidden dark:text-white"
          >
            Pierce Hahn
          </button>
          <div className="flex items-center justify-center gap-4 max-sm:gap-1">
            <Link href="https://github.com/Pierce-44" target="_blank">
              <svg
                className="fill-slate-800 dark:fill-white hover:fill-blue-400 transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pierce-hahn/"
              target="_blank"
            >
              <svg
                className="fill-slate-800 dark:fill-white hover:fill-blue-400 transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
              </svg>
            </Link>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  width="40"
                  height="40"
                  className="fill-slate-800 dark:fill-white hover:fill-blue-400 transition-all duration-300"
                >
                  <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  width="40"
                  height="40"
                  className="fill-slate-800 dark:fill-slate-300 hover:fill-blue-400 transition-all duration-300"
                >
                  <path d="M240-400q48 0 88 26t59 71l10 23h25q42 0 70 29.5t28 70.5q0 42-29 71t-71 29H240q-66 0-113-47T80-240q0-67 47-113.5T240-400Zm210-440q-18 99 11 193.5T561-481q71 71 165.5 100T920-370q-26 142-135 234.5T533-40q32-26 49.5-62.5T600-180q0-68-42.5-117.5T449-357q-32-57-87.5-90T240-480q-32 0-62.5 8T120-448q2-145 94.5-255T450-840Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex gap-16 max-lg:gap-10  max-md:gap-7 max-sm:gap-3 max-sm:text-sm">
          <button
            onClick={() => {
              if (aboutMeRef.current) {
                aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hover:border-[#ff9c9c] border-b-2 pb-1 border-[#00000000] transition-all duration-500 max-sm:pb-0"
          >
            About
          </button>
          <button
            onClick={() => {
              if (mySkillsRef.current) {
                mySkillsRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hover:border-[#a2e089] border-b-2 pb-1 border-[#00000000] transition-all duration-500 max-sm:pb-0"
          >
            Skills
          </button>
          <button
            onClick={() => {
              if (projectsRef.current) {
                projectsRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hover:border-[#ffda83] border-b-2 pb-1 border-[#00000000] transition-all duration-500 max-sm:pb-0"
          >
            Projects
          </button>
          <button
            onClick={() => {
              if (contactRef.current) {
                contactRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hover:border-[#494949] border-b-2 pb-1 border-[#00000000] transition-all duration-500 max-sm:pb-0"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
