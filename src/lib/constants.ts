import type { FooterColumn, HowStep, NavLink, PropertyCardData, TrustBadge } from "@/lib/types";

const DotIcon = () => "●";
const ShieldIcon = () => "🛡";
const BankIcon = () => "🏦";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
];

export const TRUST_BADGES: TrustBadge[] = [
  { id: "verified", label: "Verified Properties", icon: ShieldIcon() },
  { id: "transparent", label: "Transparent Bidding", icon: DotIcon() },
  { id: "authorized", label: "Bank Authorized", icon: BankIcon() },
];

export const TRENDING_AUCTIONS: PropertyCardData[] = [
  {
    id: "ad-433",
    title: "Modern Luxury Villa",
    location: "Basavanagudi, Bengaluru",
    image: "/images/Hall.jpg",
    reservePrice: 25000000,
    status: "live",
    countdownLabel: "Ends in 2h 45m",
  },
  {
    id: "ad-441",
    title: "3BHK High-Rise Apartment",
    location: "BTM Layout, Bengaluru",
    image: "/images/kitchen.jpg",
    reservePrice: 8500000,
    status: "upcoming",
    dateLabel: "Starts in 2 Days",
  },
  {
    id: "ad-448",
    title: "Commercial Office Space",
    location: "Koramangala, Bengaluru",
    image: "/images/Myrpom.jpg",
    reservePrice: 42000000,
    status: "hot",
    dateLabel: "Hot Property",
  },
];

export const HOW_STEPS: HowStep[] = [
  {
    id: "discover",
    title: "Find Property",
    description: "Browse verified listings from top banks and shortlist by city, type, and reserve price.",
    icon: "⌂",
  },
  {
    id: "verify",
    title: "Complete KYC",
    description: "Register your profile, upload documents, and prepare EMD readiness before auction day.",
    icon: "✓",
  },
  {
    id: "bid",
    title: "Bid & Win",
    description: "Place confident bids with transparent timelines and take expert help for post-win process.",
    icon: "⚖",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Quick Links",
    links: ["Home", "Active Auctions", "Education Center", "About Us"],
  },
  {
    title: "Support",
    links: ["Help Center", "Legal Services", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Contact",
    links: ["Bengaluru, Karnataka 560030", "+91 7019773792", "info@auctiondunia.com"],
  },
];
