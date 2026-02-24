import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auction Dunia",
  description: "AuctionDunia - Discover and bid on verified bank-auction properties.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
