import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BadgeStatusIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClockIcon,
  FilterIcon,
  HeartIcon,
  HomeIcon,
  ImagePlaceholderIcon,
  PinIcon,
} from "@/components/icons/AppIcons";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AUCTIONS_LISTING } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

function statusLabel(status: "live" | "upcoming" | "hot" | "verified") {
  if (status === "live") return "Live Auction";
  if (status === "upcoming") return "Upcoming";
  if (status === "hot") return "Hot Property";
  return "Verified";
}

export default function AuctionsPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="auctions-page">
        <section className="auctions-header">
          <div className="container auctions-header__inner">
            <nav className="auctions-breadcrumb" aria-label="Breadcrumb">
              <Link href="/"><HomeIcon size={12} /> Home</Link>
              <ChevronRightIcon size={12} />
              <span>Auctions</span>
            </nav>

            <div className="auctions-header__top">
              <div>
                <h1>Explore Auctions</h1>
                <p>Discover over 1,200 verified properties available for bidding.</p>
              </div>
              <div className="auctions-header__filters">
                <button>Property Type <ChevronDownIcon size={12} /></button>
                <button>Price Range <ChevronDownIcon size={12} /></button>
                <button>City <ChevronDownIcon size={12} /></button>
                <button className="is-apply"><FilterIcon size={13} /> Apply</button>
              </div>
            </div>
          </div>
        </section>

        <section className="auctions-content">
          <div className="container auctions-layout">
            <aside className="auctions-sidebar">
              <div className="auctions-sidebar__head">
                <h2>Filters</h2>
                <button>Reset All</button>
              </div>

              <div className="auctions-filter-block">
                <h3>Bank Name</h3>
                <label><input type="checkbox" /> SBI <span>(42)</span></label>
                <label><input type="checkbox" /> HDFC <span>(28)</span></label>
                <label><input type="checkbox" /> ICICI <span>(15)</span></label>
                <label><input type="checkbox" /> Axis Bank <span>(9)</span></label>
              </div>

              <div className="auctions-filter-block">
                <h3>Area (Sq. Ft)</h3>
                <div className="auctions-range-inputs">
                  <input placeholder="Min" />
                  <input placeholder="Max" />
                </div>
              </div>

              <div className="auctions-filter-block">
                <h3>EMD Amount</h3>
                <label><input type="radio" name="emd" /> Under ₹1 Lakh</label>
                <label><input type="radio" name="emd" /> ₹1 Lakh - ₹5 Lakhs</label>
                <label><input type="radio" name="emd" /> Above ₹5 Lakhs</label>
              </div>
            </aside>

            <div className="auctions-grid-wrap">
              <div className="auctions-grid-head">
                <p>Showing <strong>12</strong> of <strong>1,245</strong> properties</p>
                <button>Sort by: <strong>Newest Listed</strong> <ChevronDownIcon size={12} /></button>
              </div>

              <div className="auctions-grid">
                {AUCTIONS_LISTING.map((auction) => (
                  <article key={auction.id} className="auction-list-card">
                    <div className="auction-list-card__media">
                      {auction.image ? (
                        <Image src={auction.image} alt={auction.title} fill className="auction-list-card__image" sizes="(max-width: 1200px) 50vw, 33vw" />
                      ) : (
                        <div className="auction-list-card__placeholder">
                          <ImagePlaceholderIcon size={20} />
                        </div>
                      )}

                      <span className={`auction-list-badge is-${auction.status}`}>
                        <BadgeStatusIcon status={auction.status} /> {statusLabel(auction.status)}
                      </span>
                      <span className="auction-list-time"><ClockIcon size={12} /> {auction.countdownLabel}</span>
                    </div>

                    <div className="auction-list-card__body">
                      <div className="auction-list-card__title-row">
                        <h3>{auction.title}</h3>
                        <button aria-label={`Save ${auction.title}`}><HeartIcon size={14} /></button>
                      </div>
                      <p className="auction-list-card__location"><PinIcon size={12} /> {auction.location}</p>

                      <div className="auction-list-card__tags">
                        {auction.tags.map((tag) => <span key={tag.id}>{tag.label}</span>)}
                      </div>

                      <div className="auction-list-card__footer">
                        <div>
                          <p>Reserve Price</p>
                          <strong>{formatPrice(auction.reservePrice)}</strong>
                        </div>
                        <Link href={`/auctions/${auction.id}`} aria-label={`View ${auction.title}`}>
                          <ArrowRightIcon size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="auctions-pagination">
                <button>‹</button>
                <button className="is-active">1</button>
                <button>2</button>
                <button>3</button>
                <span>...</span>
                <button>12</button>
                <button>›</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="full" />
    </div>
  );
}
