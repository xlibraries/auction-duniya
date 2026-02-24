import type { AuctionDetailData, FooterColumn, HowStep, NavLink, PropertyCardData, TrustBadge } from "@/lib/types";

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M8.5 12.2l2.2 2.3 4.8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HomeStepIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
    <path d="M4 11.5L12 5l8 6.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 10.8V19h10v-8.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldStepIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
    <path d="M12 4l7 2.8V12c0 4.6-3.2 7.8-7 8.9C8.2 19.8 5 16.6 5 12V6.8L12 4z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
    <path d="M9.2 12.3l2.1 2.1 3.8-3.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GavelStepIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
    <path d="M4 19h16" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    <path d="M14.8 4.8l4.4 4.4" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    <path d="M6.2 13.4l7.3-7.3 3.1 3.1-7.3 7.3H6.2z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
];

export const TRUST_BADGES: TrustBadge[] = [
  { id: "verified", label: "Verified Properties", icon: <CheckCircleIcon /> },
  { id: "transparent", label: "Transparent Bidding", icon: <CheckCircleIcon /> },
  { id: "authorized", label: "Bank Authorized", icon: <CheckCircleIcon /> },
];

export const TRENDING_AUCTIONS: PropertyCardData[] = [
  {
    id: "ad-433",
    title: "Modern Luxury Villa",
    location: "Basavanagudi, Bangalore",
    image: "/images/Hall.jpg",
    reservePrice: 25000000,
    status: "live",
    countdownLabel: "Ends in 2h 45m",
  },
  {
    id: "ad-441",
    title: "3BHK High-Rise Apartment",
    location: "Whitefield, Bangalore",
    image: "/images/kitchen.jpg",
    reservePrice: 8500000,
    status: "upcoming",
    dateLabel: "Starts in 2 Days",
  },
  {
    id: "ad-448",
    title: "Commercial Office Space",
    location: "Koramangala, Bangalore",
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
    description: "Browse thousands of verified bank auction properties. Filter by location, price, and type to find your match.",
    icon: <HomeStepIcon />,
  },
  {
    id: "verify",
    title: "Complete KYC",
    description: "Register and submit your KYC documents securely. Pay the EMD (Earnest Money Deposit) to participate.",
    icon: <ShieldStepIcon />,
  },
  {
    id: "bid",
    title: "Bid & Win",
    description: "Participate in the live e-auction. Place your bids strategically and secure the property at a great price.",
    icon: <GavelStepIcon />,
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
    links: ["Bengaluru, Karnataka 560030", "7019773792", "info@auctiondunia.com"],
  },
];

export const AUCTION_DETAILS: Record<string, AuctionDetailData> = {
  "ad-433": {
    id: "ad-433",
    title: "Emerald Heights Villa, Sector 45",
    breadcrumbLabel: "Emerald Heights Villa",
    bank: "State Bank of India",
    location: "Gurgaon, Haryana",
    subLocation: "Near City Center",
    highestBid: "₹ 3.92 Cr",
    aboveReserve: "+ ₹7 Lakhs above reserve",
    countdown: {
      hrs: "02",
      min: "45",
      sec: "12",
    },
    images: ["/images/Hall.jpg", "/images/kitchen.jpg", "/images/Myrpom.jpg"],
    overview: [
      { id: "area", label: "Total Area", value: "2,450 sq.ft" },
      { id: "type", label: "Property Type", value: "4BHK Villa" },
      { id: "possession", label: "Possession", value: "Physical" },
      { id: "verification", label: "Verification", value: "SARFAESI" },
    ],
    description:
      "Prime residential villa located in the heart of Gurgaon. This property is part of the prestigious Emerald Heights community. Featuring 4 spacious bedrooms, a private garden, and modern amenities. The property is currently under the physical possession of State Bank of India under the SARFAESI Act. Excellent connectivity to NH-8 and rapid metro.",
    stats: [
      { id: "reserve", label: "Reserve Price", value: "₹ 3.85 Cr", tone: "green" },
      { id: "increment", label: "Increment Value", value: "₹ 1,00,000", tone: "blue" },
      { id: "bidders", label: "Active Bidders", value: "14 People", tone: "orange" },
    ],
    bidActivityLabel: "Last updated 2 mins ago",
    bidActivityNote: "Activity is high! 5 new bids in the last hour.",
    legalDocuments: [
      { id: "deed", title: "Property Title Deed", meta: "PDF • 2.4 MB", type: "deed" },
      { id: "notice", title: "Auction Notice", meta: "PDF • 1.1 MB", type: "notice" },
      { id: "terms", title: "Terms & Conditions", meta: "PDF • 850 KB", type: "terms" },
    ],
    officer: {
      name: "Rajesh Kumar",
      role: "Authorized Officer, SBI",
      avatar: "/images/kitchen.jpg",
    },
    mapPreview: "/images/Hall.jpg",
  },
};
