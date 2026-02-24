"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="ad-navbar">
      <div className="container ad-navbar__inner">
        <Link href="/" className="ad-logo">Auction Dunia</Link>

        <button
          className="ad-nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`ad-nav ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="ad-nav__link" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <button className="ad-nav__icon" aria-label="Search">⌕</button>
          <button className="ad-login-btn">Login</button>
        </nav>
      </div>
    </header>
  );
}
