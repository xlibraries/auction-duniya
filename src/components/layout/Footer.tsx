import { FOOTER_COLUMNS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FooterProps = {
  variant?: "full" | "slim";
};

export function Footer({ variant = "full" }: FooterProps) {
  if (variant === "slim") {
    return (
      <footer className="ad-footer ad-footer--slim">
        <div className="container ad-footer__slim-row">
          <span>Auction Dunia</span>
          <span>© 2026 Auction Dunia</span>
          <span>Privacy · Terms · Contact</span>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn("ad-footer", "ad-footer--full")}>
      <div className="ad-cta-band">
        <div className="container ad-cta-band__inner">
          <h3>Ready to Start Your Journey?</h3>
          <p>Join thousands of happy investors who found their dream property through Auction Dunia.</p>
          <div className="ad-cta-band__buttons">
            <button className="ad-btn ad-btn--dark">Browse Auctions</button>
            <button className="ad-btn ad-btn--outline-white">Contact Expert</button>
          </div>
        </div>
      </div>

      <div className="container ad-footer__grid">
        <div>
          <div className="ad-logo">Auction Dunia</div>
          <p className="ad-footer__text">Your trusted partner for buying bank-repossessed properties in India with confidence and clarity.</p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="ad-footer__heading">{column.title}</h4>
            <ul className="ad-footer__links">
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ad-footer__bottom">
        <div className="container ad-footer__bottom-row">
          <span>© 2026 Auction Dunia. All Rights Reserved.</span>
          <span>🌐</span>
        </div>
      </div>
    </footer>
  );
}
