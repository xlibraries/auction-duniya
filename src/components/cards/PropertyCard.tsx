import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Countdown } from "@/components/ui/Countdown";
import type { PropertyCardData } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

type PropertyCardProps = {
  data: PropertyCardData;
  variant: "home";
};

export function PropertyCard({ data }: PropertyCardProps) {
  return (
    <article className="property-card">
      <div className="property-card__media">
        <Image src={data.image} alt={data.title} fill className="property-card__image" sizes="(max-width: 1024px) 100vw, 33vw" />
        <Badge variant={data.status} className="property-card__badge">
          {data.status === "live" ? "Live Auction" : data.status === "upcoming" ? "Starts in 2 Days" : data.status === "hot" ? "Hot Property" : "Verified"}
        </Badge>
        <Countdown label={data.countdownLabel} date={data.dateLabel} />
      </div>
      <div className="property-card__body">
        <h3>{data.title}</h3>
        <p className="property-card__location">{data.location}</p>
        <div className="property-card__meta">RESERVE PRICE</div>
        <div className="property-card__footer">
          <strong>{formatPrice(data.reservePrice)}</strong>
          <Link href={`/auctions/${data.id}`} className="property-card__arrow" aria-label={`View ${data.title}`}>→</Link>
        </div>
      </div>
    </article>
  );
}
