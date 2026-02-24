import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BiddersIcon,
  CallIcon,
  ChevronRightIcon as ChevronRight,
  DocIcon,
  DownloadIcon,
  FullscreenIcon,
  GridIcon,
  HeartIcon,
  ImmersiveIcon,
  IncrementIcon,
  MailIcon,
  MapIcon,
  MoneyIcon,
  NextIcon,
  OverviewCardIcon,
  OverviewIcon,
  PauseIcon,
  PinIcon,
  PrevIcon,
  ShareIcon,
  TrendUpIcon,
} from "@/components/icons/AppIcons";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AUCTION_DETAILS } from "@/lib/constants";

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
