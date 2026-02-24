"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const BrandIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path d="M6 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 13.8l3-3 4 4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6.5l6 6.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6.8" stroke="currentColor" strokeWidth="2" />
    <path d="M16.2 16.2L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="2" />
    <path d="M5 19c1.8-2.7 4.1-4 7-4s5.2 1.3 7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="ad-navbar">
      <div className="container ad-navbar__inner">
        <Link href="/" className="ad-logo" onClick={() => setOpen(false)}>
          <span className="ad-logo__badge"><BrandIcon /></span>
          <span className="ad-logo__text">Auction Dunia</span>
        </Link>

        <button
          className="ad-nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={cn("ad-nav-panel", open && "is-open")}>
          <nav className="ad-nav">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn("ad-nav__link", isActive && "is-active")}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="ad-nav-actions">
            <button className="ad-nav__icon" aria-label="Search">
              <SearchIcon />
            </button>
            <button className="ad-login-btn">
              <UserIcon /> Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
