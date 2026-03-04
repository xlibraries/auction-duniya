import { SearchBar } from "@/components/ui/SearchBar";
import { TRUST_BADGES } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-section__inner">
        <h1 className="hero-section__title">Find Your Dream Property<br />at Unbeatable Prices</h1>
        <p className="hero-section__sub">Secure bank-auctioned properties across India. Transparent, reliable, and easy.</p>
        <SearchBar />
        <div className="hero-section__badges">
          {TRUST_BADGES.map((badge) => (
            <span key={badge.id} className="hero-trust-badge">{badge.icon} {badge.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
