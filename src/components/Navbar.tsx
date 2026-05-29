"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-text-primary font-bold text-base shrink-0">
          Mohamed Showqath N
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-primary"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent md:gap-8 p-6 md:p-0 border-b md:border-0 border-border shadow-md md:shadow-none`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium block py-2.5 md:py-0 whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
