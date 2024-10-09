"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="   ">
        <nav className="flex justify-between">
          <h1 id="logo" className="text-2xl">
            Nischal
          </h1>
          <ul className="flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Help</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
