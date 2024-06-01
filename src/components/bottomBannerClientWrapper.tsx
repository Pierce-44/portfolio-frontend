"use client";

import React from "react";
import BottomBannerServer from "./bottomBannerServer";

export default function BottomBannerClientWrapper() {
  const colorSchemes = [
    { color1: "#c5e0fd", color2: "#98bfff", color3: "#8299ff" },
    { color1: "#ffd5d5", color2: "#ff9c9c", color3: "#ff8080" },
    { color1: "#ccffb3", color2: "#a2e089", color3: "#78c261" },
    { color1: "#ffe8b3", color2: "#ffda83", color3: "#ffd167" },
  ];

  const [currentColors, setCurrentColors] = React.useState(colorSchemes[0]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight - 200;
      const viewportHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / viewportHeight);
      const newColors = colorSchemes[sectionIndex % colorSchemes.length];

      setCurrentColors(newColors);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    // className="bg-[#ffd167]"
    >
      <BottomBannerServer currentColors={currentColors} />
    </div>
  );
}
