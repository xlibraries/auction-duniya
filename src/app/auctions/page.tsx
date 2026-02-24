import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AuctionsPlaceholderPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="section">
        <div className="container placeholder-page">
          <p className="section-label">Coming Soon</p>
          <h1 className="section-title">Auctions Listing Page</h1>
          <p className="section-sub">This route is reserved for the next phase implementation.</p>
          <Link href="/" className="ad-btn ad-btn--primary">Back Home</Link>
        </div>
      </main>
      <Footer variant="slim" />
    </div>
  );
}
