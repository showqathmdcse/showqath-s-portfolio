"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-accent font-bold text-lg glow">
          ~/mshowqath
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-accent"
          aria-label="Toggle menu"
        >
          {open ? "[x]" : "[=]"}
        </button>
        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#0a0a0a] md:bg-transparent gap-1 md:gap-6 p-4 md:p-0 border-b md:border-0 border-border`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                <span className="text-accent">$</span> {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
