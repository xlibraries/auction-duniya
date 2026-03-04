import { BrandIcon, GlobeIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons/AppIcons";
import { FOOTER_COLUMNS } from "@/lib/constants";

type FooterProps = {
  variant?: "full" | "slim";
};

export function Footer({ variant = "full" }: FooterProps) {
  if (variant === "slim") {
    return (
      <footer className="ad-footer ad-footer--slim">
        <div className="container ad-footer__slim-row">
          <div className="ad-logo ad-logo--slim">
            <span className="ad-logo__badge"><BrandIcon size={18} /></span>
            <span className="ad-logo__text">Auction Dunia</span>
          </div>
          <span>© 2026 Auction Dunia. Your trusted bank auction platform.</span>
          <div className="ad-footer__slim-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="ad-footer ad-footer--full">
      <div className="container ad-footer__grid">
        <div>
          <div className="ad-logo ad-logo--footer">
            <span className="ad-logo__badge"><BrandIcon size={18} /></span>
            <span className="ad-logo__text">Auction Dunia</span>
          </div>
          <p className="ad-footer__text">Your trusted partner for buying bank-repossessed properties in India. We simplify the SARFAESI auction process for everyone.</p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="ad-footer__heading">{column.title}</h4>
            <ul className="ad-footer__links">
              {column.links.map((link, idx) => (
                <li key={link}>
                  {column.title === "Contact" && idx === 0 ? <PinIcon size={14} /> : null}
                  {column.title === "Contact" && idx === 1 ? <PhoneIcon size={14} /> : null}
                  {column.title === "Contact" && idx === 2 ? <MailIcon size={14} /> : null}
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ad-footer__bottom">
        <div className="container ad-footer__bottom-row">
          <span>© 2026 Auction Dunia. All Rights Reserved.</span>
          <span className="ad-footer__bottom-globe"><GlobeIcon size={14} /></span>
        </div>
      </div>
    </footer>
  );
}
