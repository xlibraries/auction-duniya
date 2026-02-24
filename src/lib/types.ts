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
