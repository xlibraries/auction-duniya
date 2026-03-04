"use client";

import { useState } from "react";
import { BuildingIcon, PinIcon, SearchIcon } from "@/components/icons/AppIcons";
import { Button } from "@/components/ui/Button";

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
            <span className="hero-search-field-icon"><BuildingIcon size={18} /></span>
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
            <span className="hero-search-field-icon"><PinIcon size={18} /></span>
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
        <SearchIcon size={18} /> Search
      </Button>
    </div>
  );
}
