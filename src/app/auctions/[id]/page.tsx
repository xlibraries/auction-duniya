import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default async function AuctionDetailPlaceholder({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="page-shell">
      <Navbar />
      <main className="section">
        <div className="container placeholder-page">
          <p className="section-label">Coming Soon</p>
          <h1 className="section-title">Property Detail Page</h1>
          <p className="section-sub">Detail page for auction id: <strong>{id}</strong> will be implemented in the next phase.</p>
          <Link href="/auctions" className="ad-btn ad-btn--primary">Back to Auctions</Link>
        </div>
      </main>
      <Footer variant="slim" />
    </div>
  );
}
