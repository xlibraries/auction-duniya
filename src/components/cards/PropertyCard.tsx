import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Countdown } from "@/components/ui/Countdown";
import type { PropertyCardData } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M12 19c3-3 5.4-5.8 5.4-8.2a5.4 5.4 0 10-10.8 0c0 2.4 2.4 5.2 5.4 8.2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="10.8" r="1.8" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M13.5 6.8L19 12l-5.5 5.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BadgeIcon = ({ status }: { status: PropertyCardData["status"] }) => {
  if (status === "live") {
    return (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path d="M5 12a7 7 0 017-7M19 12a7 7 0 00-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (status === "upcoming") {
    return (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 3v5M16 3v5M4 10h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
      <path d="M12 3l2.8 5.7 6.2.9-4.5 4.3 1.1 6.1L12 17l-5.6 3 1.1-6.1L3 9.6l6.2-.9L12 3z" fill="currentColor" />
    </svg>
  );
};

type PropertyCardProps = {
  data: PropertyCardData;
  variant: "home";
};

export function PropertyCard({ data }: PropertyCardProps) {
  const badgeText = data.status === "live" ? "Live Auction" : data.status === "upcoming" ? "Starts in 2 Days" : data.status === "hot" ? "Hot Property" : "Verified";

  return (
    <article className="property-card">
      <div className="property-card__media">
        <Image src={data.image} alt={data.title} fill className="property-card__image" sizes="(max-width: 1024px) 100vw, 33vw" />
        <Badge variant={data.status} className="property-card__badge">
          <BadgeIcon status={data.status} /> {badgeText}
        </Badge>
        <Countdown label={data.countdownLabel} />
      </div>
      <div className="property-card__body">
        <h3>{data.title}</h3>
        <p className="property-card__location"><PinIcon /> {data.location}</p>
        <div className="property-card__meta">RESERVE PRICE</div>
        <div className="property-card__footer">
          <strong>{formatPrice(data.reservePrice)}</strong>
          <Link href={`/auctions/${data.id}`} className="property-card__arrow" aria-label={`View ${data.title}`}><ArrowIcon /></Link>
        </div>
      </div>
    </article>
  );
}
