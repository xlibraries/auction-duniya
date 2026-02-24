import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AUCTION_DETAILS } from "@/lib/constants";

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ImmersiveIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M4 12c1.4-2.6 3.8-4 8-4s6.6 1.4 8 4c-1.4 2.6-3.8 4-8 4s-6.6-1.4-8-4z" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="6" y="5" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <rect x="14" y="5" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8.6 10.7l6.8-4M8.6 13.3l6.8 4" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const PrevIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M14.5 6L8.5 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M9.5 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path d="M12 20.5l-1-.9C6.2 15.4 3 12.6 3 8.9A4.9 4.9 0 017.9 4c1.7 0 3.3.8 4.1 2.1A5 5 0 0116.1 4 4.9 4.9 0 0121 8.9c0 3.7-3.2 6.5-8 10.7l-1 .9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M12 19c3-3 5.4-5.8 5.4-8.2a5.4 5.4 0 10-10.8 0c0 2.4 2.4 5.2 5.4 8.2z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
    <circle cx="12" cy="10.8" r="1.8" stroke="currentColor" strokeWidth="1.9" />
  </svg>
);

const TrendUpIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
    <path d="M4 16l5-5 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 8h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MoneyIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M6 9h2M16 15h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IncrementIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path d="M4 16l5-5 4 4 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 8h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BiddersIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3.8 18c.8-2.7 2.8-4 5.2-4 2.3 0 4.3 1.3 5.1 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M14.7 18c.5-1.8 1.8-2.8 3.3-2.8 1.3 0 2.4.6 3.2 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const OverviewIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 8v8M15 8v8M7 11h4M7 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const DocIcon = ({ type }: { type: "deed" | "notice" | "terms" }) => {
  if (type === "terms") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path d="M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7.5 13.5l4-4 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3 6.5l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M7 3.5h7l4 4V20a.5.5 0 01-.5.5h-10A.5.5 0 017 20V3.5z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 3.5V8h4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 12h6M9 15h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
};

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M12 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8.5 10.7L12 14.2l3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CallIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M6.4 4h3.1l1.3 4-2 1.9a15 15 0 006.3 6.3l1.9-2 4 1.3v3.1c0 .8-.6 1.4-1.4 1.4C11.2 19.8 4.2 12.8 4.2 5.4 4.2 4.6 4.8 4 5.6 4h.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M4 7.5L9 5l6 2.5L20 5v11.5L15 19l-6-2.5L4 19V7.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 5v11.5M15 7.5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const OverviewCardIcon = ({ id }: { id: string }) => {
  if (id === "area") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <path d="M4 18L18 4M8 19h11V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "type") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <path d="M3.5 11.5L12 5l8.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10.5V19h10v-8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "possession") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 12h10M17 9l4 3-4 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 4l7 2.8V12c0 4.6-3.2 7.8-7 8.9C8.2 19.8 5 16.6 5 12V6.8L12 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.2 12.3l2.1 2.1 3.8-3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default async function AuctionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = AUCTION_DETAILS[id];

  if (!property) {
    notFound();
  }

  return (
    <div className="page-shell">
      <Navbar />
      <main className="auction-detail-page">
        <div className="container auction-detail-shell">
          <nav className="ad-breadcrumb" aria-label="Breadcrumb">
            <Link href="/auctions">Auctions</Link>
            <ChevronRight />
            <span>Residential</span>
            <ChevronRight />
            <span className="is-current">{property.breadcrumbLabel}</span>
          </nav>

          <div className="ad-detail-grid">
            <section className="ad-detail-main">
              <article className="ad-gallery-card">
                <Image src={property.images[0]} alt={property.title} fill className="ad-gallery-image" sizes="(max-width: 1024px) 100vw, 66vw" />
                <span className="ad-gallery-badge">
                  <ImmersiveIcon />
                  Immersive Tour Enabled
                </span>
                <div className="ad-gallery-tools">
                  <button aria-label="Pause slideshow"><PauseIcon /></button>
                  <button aria-label="Enter fullscreen"><FullscreenIcon /></button>
                  <button aria-label="Share property"><ShareIcon /></button>
                </div>
                <button className="ad-gallery-nav ad-gallery-nav--prev" aria-label="Previous image"><PrevIcon /></button>
                <button className="ad-gallery-nav ad-gallery-nav--next" aria-label="Next image"><NextIcon /></button>
                <button className="ad-gallery-all" aria-label="View all photos">
                  <GridIcon />
                  View All 12 Photos
                </button>
              </article>

              <article className="ad-overview-card">
                <h2><OverviewIcon /> Property Overview</h2>
                <div className="ad-overview-grid">
                  {property.overview.map((item) => (
                    <div key={item.id} className="ad-overview-item">
                      <span className="ad-overview-item__icon"><OverviewCardIcon id={item.id} /></span>
                      <p>{item.label}</p>
                      <h3>{item.value}</h3>
                    </div>
                  ))}
                </div>
                <div className="ad-description-block">
                  <h3>Description</h3>
                  <p>{property.description}</p>
                </div>
              </article>

              <article className="ad-stats-card">
                <h2><ImmersiveIcon /> Auction Statistics</h2>
                <div className="ad-stats-grid">
                  {property.stats.map((item) => (
                    <div key={item.id} className="ad-stat-item">
                      <span className={`ad-stat-item__icon is-${item.tone}`}>
                        {item.id === "reserve" ? <MoneyIcon /> : item.id === "increment" ? <IncrementIcon /> : <BiddersIcon />}
                      </span>
                      <div>
                        <p>{item.label}</p>
                        <h3>{item.value}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ad-bid-activity">
                  <div className="ad-bid-activity__head">
                    <strong>Bid Activity</strong>
                    <span>{property.bidActivityLabel}</span>
                  </div>
                  <div className="ad-bid-activity__bar"><span /></div>
                  <p>{property.bidActivityNote}</p>
                </div>
              </article>
            </section>

            <aside className="ad-detail-side">
              <article className="ad-side-card ad-price-card">
                <div className="ad-price-top">
                  <span>{property.bank}</span>
                  <button aria-label="Save auction"><HeartIcon /></button>
                </div>
                <h1>{property.title}</h1>
                <p className="ad-price-location"><PinIcon /> {property.location} • {property.subLocation}</p>
                <div className="ad-price-bid-block">
                  <p>Current Highest Bid</p>
                  <h2>{property.highestBid}</h2>
                  <span><TrendUpIcon /> {property.aboveReserve}</span>
                </div>
              </article>

              <article className="ad-side-card ad-countdown-card" aria-label="Auction countdown">
                <p>Auction Ends In</p>
                <div className="ad-countdown-values">
                  <div><strong>{property.countdown.hrs}</strong><span>hrs</span></div>
                  <em>:</em>
                  <div><strong>{property.countdown.min}</strong><span>min</span></div>
                  <em>:</em>
                  <div className="is-highlight"><strong>{property.countdown.sec}</strong><span>sec</span></div>
                </div>
                <span className="ad-countdown-ring" aria-hidden="true" />
              </article>

              <article className="ad-side-card ad-docs-card">
                <h2>Legal Documents</h2>
                <ul>
                  {property.legalDocuments.map((doc) => (
                    <li key={doc.id}>
                      <span className={`ad-doc-icon is-${doc.type}`}><DocIcon type={doc.type} /></span>
                      <div>
                        <strong>{doc.title}</strong>
                        <p>{doc.meta}</p>
                      </div>
                      <button aria-label={`Download ${doc.title}`}><DownloadIcon /></button>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="ad-side-card ad-officer-card">
                <h2>Auction Officer</h2>
                <div className="ad-officer-meta">
                  <Image src={property.officer.avatar} alt={property.officer.name} width={48} height={48} className="ad-officer-avatar" />
                  <div>
                    <h3>{property.officer.name}</h3>
                    <p>{property.officer.role}</p>
                  </div>
                </div>
                <div className="ad-officer-actions">
                  <button><CallIcon /> Call</button>
                  <button><MailIcon /> Email</button>
                </div>
              </article>

              <article className="ad-side-map">
                <Image src={property.mapPreview} alt="Property map preview" fill className="ad-side-map__image" sizes="(max-width: 1024px) 100vw, 33vw" />
                <button><MapIcon /> View on Map</button>
              </article>
            </aside>
          </div>
        </div>
      </main>
      <Footer variant="slim" />
    </div>
  );
}
