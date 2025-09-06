import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import "./Navbar.css";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close on ESC, on hash change, or when switching to desktop width
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onHash = () => setOpen(false);
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <div className="nav-inner glass-pill">
        {/* Mobile label */}
        <span className="menu-label">Menu</span>

        {/* Hamburger */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>

        {/* Links (dropdown on mobile, inline on desktop) */}
        <ul className={`nav-list ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
