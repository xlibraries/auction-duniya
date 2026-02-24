"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandIcon, SearchIcon, UserIcon } from "@/components/icons/AppIcons";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="ad-navbar">
      <div className="container ad-navbar__inner">
        <Link href="/" className="ad-logo" onClick={() => setOpen(false)}>
          <span className="ad-logo__badge"><BrandIcon size={20} /></span>
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
              <SearchIcon size={18} />
            </button>
            <button className="ad-login-btn">
              <UserIcon size={16} /> Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
