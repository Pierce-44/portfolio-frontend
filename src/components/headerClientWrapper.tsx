"use client";
import React from "react";
import HeaderServer from "./headerServer";

export default function HeaderClientWrapper() {
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
    <div ref={stickyRef}>
      <HeaderServer isScrolled={isScrolled} />
    </div>
  );
}
