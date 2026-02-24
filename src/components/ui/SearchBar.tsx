"use client";

import { useState } from "react";
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
        <label className="sr-only" htmlFor="propertyType">Property type</label>
        <input
          id="propertyType"
          className="hero-search-input"
          placeholder="Apartment, Villa, Land..."
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        />
        <span className="hero-search-divider" />
        <label className="sr-only" htmlFor="location">Location</label>
        <input
          id="location"
          className="hero-search-input"
          placeholder="City, Area, or Zip Code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <Button variant="primary" className="hero-search-btn" onClick={handleSearch}>Search</Button>
    </div>
  );
}
