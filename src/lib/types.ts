import type { ReactNode } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type TrustBadge = {
  id: string;
  label: string;
  icon: ReactNode;
};

export type PropertyStatus = "live" | "upcoming" | "hot" | "verified";

export type PropertyCardData = {
  id: string;
  title: string;
  location: string;
  image: string;
  reservePrice: number;
  status: PropertyStatus;
  countdownLabel?: string;
  dateLabel?: string;
};

export type HowStep = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export type FooterColumn = {
  title: string;
  links: string[];
};

export type AuctionLegalDoc = {
  id: string;
  title: string;
  meta: string;
  type: "deed" | "notice" | "terms";
};

export type AuctionOverviewItem = {
  id: string;
  label: string;
  value: string;
};

export type AuctionStatItem = {
  id: string;
  label: string;
  value: string;
  tone: "green" | "blue" | "orange";
};

export type AuctionDetailData = {
  id: string;
  title: string;
  breadcrumbLabel: string;
  bank: string;
  location: string;
  subLocation: string;
  highestBid: string;
  aboveReserve: string;
  countdown: {
    hrs: string;
    min: string;
    sec: string;
  };
  images: string[];
  overview: AuctionOverviewItem[];
  description: string;
  stats: AuctionStatItem[];
  bidActivityLabel: string;
  bidActivityNote: string;
  legalDocuments: AuctionLegalDoc[];
  officer: {
    name: string;
    role: string;
    avatar: string;
  };
  mapPreview: string;
};
