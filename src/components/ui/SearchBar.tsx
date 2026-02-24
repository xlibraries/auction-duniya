"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="4" y="5" width="7" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 8h1M8 11h1M8 14h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="13" y="9" width="7" height="10" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 12h1M16 15h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path d="M12 20c3.4-3.3 6-6.3 6-9a6 6 0 10-12 0c0 2.7 2.6 5.7 6 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6.8" stroke="currentColor" strokeWidth="2" />
    <path d="M16.2 16.2L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

type Query = {
  propertyType: string;
  location: string;
};

type SearchBarProps = {
  onSearch?: (query: Query) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch?.({ propertyType, location });
  };

  return (
    <div className="hero-search-wrap" role="search" aria-label="Property search">
      <div className="hero-search-inputs">
        <div className="hero-search-field">
          <p className="hero-search-label">What Are You Looking For?</p>
          <div className="hero-search-value-wrap">
            <span className="hero-search-field-icon"><BuildingIcon /></span>
            <label className="sr-only" htmlFor="propertyType">Property type</label>
            <input
              id="propertyType"
              className="hero-search-input"
              placeholder="Apartment, Villa, Land..."
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            />
          </div>
        </div>

        <span className="hero-search-divider" />

        <div className="hero-search-field">
          <p className="hero-search-label">Location</p>
          <div className="hero-search-value-wrap">
            <span className="hero-search-field-icon"><PinIcon /></span>
            <label className="sr-only" htmlFor="location">Location</label>
            <input
              id="location"
              className="hero-search-input"
              placeholder="City, Area, or Zip Code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button variant="primary" className="hero-search-btn" onClick={handleSearch}>
        <SearchIcon /> Search
      </Button>
    </div>
  );
}
