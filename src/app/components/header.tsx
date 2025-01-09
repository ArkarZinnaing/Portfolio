"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar2 from "./Navbar2";
import { useState } from "react";

export default function NavHeader() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 my-3">
        {/* Logo */}
        <h1>
          <Link href="/">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="logo"
              loading="lazy"
            />
          </Link>
        </h1>

        {/* Navbar Wrapper */}
        <div className="relative flex-1 flex justify-end md:justify-center">
          {/* Hamburger Icon for Mobile */}
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded text-white text-2xl">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Navbar */}
          <Navbar2 navOpen={navOpen} />
        </div>

        {/* Contact Button - Visible only in Desktop */}
        <Link
          href="#contact"
          className="hidden btn btn-secondary md:flex"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
}
