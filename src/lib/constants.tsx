import { CheckCircleIcon, GavelStepIcon, HomeStepIcon, ShieldStepIcon } from "@/components/icons/AppIcons";
import type { AuctionDetailData, AuctionListingData, FooterColumn, HowStep, NavLink, PropertyCardData, TrustBadge } from "@/lib/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Auctions", href: "/auctions" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
];

export const TRUST_BADGES: TrustBadge[] = [
  { id: "verified", label: "Verified Properties", icon: <CheckCircleIcon size={14} /> },
  { id: "transparent", label: "Transparent Bidding", icon: <CheckCircleIcon size={14} /> },
  { id: "authorized", label: "Bank Authorized", icon: <CheckCircleIcon size={14} /> },
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
    icon: <HomeStepIcon size={24} />,
  },
  {
    id: "verify",
    title: "Complete KYC",
    description: "Register and submit your KYC documents securely. Pay the EMD (Earnest Money Deposit) to participate.",
    icon: <ShieldStepIcon size={24} />,
  },
  {
    id: "bid",
    title: "Bid & Win",
    description: "Participate in the live e-auction. Place your bids strategically and secure the property at a great price.",
    icon: <GavelStepIcon size={24} />,
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

export const AUCTIONS_LISTING: AuctionListingData[] = [
  {
    id: "ad-433",
    title: "Luxury Villa with Pool",
    location: "Basavanagudi, Bangalore",
    image: "/images/Hall.jpg",
    status: "live",
    countdownLabel: "Ends in 02h : 15m : 30s",
    reservePrice: 25000000,
    tags: [
      { id: "bhk", label: "4 BHK" },
      { id: "area", label: "3500 Sq.Ft" },
      { id: "type", label: "Freehold" },
    ],
  },
  {
    id: "ad-441",
    title: "3BHK High-Rise Apt",
    location: "Whitefield, Bangalore",
    image: "/images/kitchen.jpg",
    status: "upcoming",
    countdownLabel: "Starts in 2 Days",
    reservePrice: 8500000,
    tags: [
      { id: "bhk", label: "3 BHK" },
      { id: "area", label: "1850 Sq.Ft" },
      { id: "type", label: "Semi-Furnished" },
    ],
  },
  {
    id: "ad-448",
    title: "Prime Office Space",
    location: "Koramangala, Bangalore",
    image: "/images/Myrpom.jpg",
    status: "hot",
    countdownLabel: "Ends in 14h : 30m",
    reservePrice: 42000000,
    tags: [
      { id: "type", label: "Office" },
      { id: "area", label: "4500 Sq.Ft" },
      { id: "zone", label: "Corner Plot" },
    ],
  },
  {
    id: "ad-451",
    title: "Industrial Plot Phase 2",
    location: "Peenya, Bangalore",
    status: "verified",
    countdownLabel: "Oct 26, 10:00 AM",
    reservePrice: 18000000,
    tags: [
      { id: "kind", label: "Industrial" },
      { id: "area", label: "5000 Sq.Ft" },
      { id: "zone", label: "Zone A" },
    ],
  },
  {
    id: "ad-452",
    title: "Duplex Penthouse",
    location: "Indiranagar, Bangalore",
    status: "verified",
    countdownLabel: "Oct 28, 2:00 PM",
    reservePrice: 56000000,
    tags: [
      { id: "bhk", label: "4 BHK" },
      { id: "area", label: "3200 Sq.Ft" },
      { id: "type", label: "Luxury" },
    ],
  },
  {
    id: "ad-453",
    title: "Retail Shop Space",
    location: "Jayanagar, Bangalore",
    status: "verified",
    countdownLabel: "Nov 01, 11:30 AM",
    reservePrice: 4500000,
    tags: [
      { id: "kind", label: "Shop" },
      { id: "area", label: "900 Sq.Ft" },
      { id: "type", label: "Ground Floor" },
    ],
  },
];
