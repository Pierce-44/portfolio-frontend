"use client";
import React from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const stickyRef = React.useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`h-14 fixed top-0 left-0 w-full ${
        isScrolled ? "bg-white h-16 shadow-lg" : "bg-[#f6f8ff]"
      } transition-all duration-700`}
    >
      <div></div>
    </div>
  );
}
