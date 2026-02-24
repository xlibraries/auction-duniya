import Link from "next/link";
import { PropertyCard } from "@/components/cards/PropertyCard";
import { TRENDING_AUCTIONS } from "@/lib/constants";

export function TrendingAuctions() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="section-head-row">
          <div>
            <h2 className="section-head-row__title">Trending Auctions</h2>
            <p className="section-head-row__sub">High demand properties ending soon.</p>
          </div>
          <Link href="/auctions" className="section-head-row__link">View All →</Link>
        </div>
        <div className="property-grid">
          {TRENDING_AUCTIONS.map((property) => (
            <PropertyCard key={property.id} data={property} variant="home" />
          ))}
        </div>
      </div>
    </section>
  );
}
