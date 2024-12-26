"use client";
import React, { useRef, useEffect } from "react";

const Navbar2: React.FC<{ navOpen: boolean }> = ({ navOpen }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActive = () => {
    if (lastActiveLink.current && activeBox.current) {
      const link = lastActiveLink.current;
      activeBox.current.style.top = link.offsetTop + "px";
      activeBox.current.style.left = link.offsetLeft + "px";
      activeBox.current.style.width = link.offsetWidth + "px";
      activeBox.current.style.height = link.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActive();
  }, [navOpen]);

  const handleActiveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    lastActiveLink.current?.classList.remove("active");
    target.classList.add("active");
    lastActiveLink.current = target;
    initActive();
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active", ref: lastActiveLink },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Review", link: "#review", className: "nav-link"},
    { label: "Content", link: "#content", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, index) => (
        <a
          key={index}
          href={link}
          className={className}
          ref={ref}
          onClick={handleActiveLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar2;
