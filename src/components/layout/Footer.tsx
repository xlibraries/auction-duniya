import { FOOTER_COLUMNS } from "@/lib/constants";

type FooterProps = {
  variant?: "full" | "slim";
};

const BrandIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path d="M6 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 13.8l3-3 4 4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6.5l6 6.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M12 19c3-3 5.4-5.8 5.4-8.2a5.4 5.4 0 10-10.8 0c0 2.4 2.4 5.2 5.4 8.2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="10.8" r="1.8" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M6.4 4h3.1l1.3 4-2 1.9a15 15 0 006.3 6.3l1.9-2 4 1.3v3.1c0 .8-.6 1.4-1.4 1.4C11.2 19.8 4.2 12.8 4.2 5.4 4.2 4.6 4.8 4 5.6 4h.8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3.8 12h16.4M12 3.5c2.1 2.3 3.1 5.2 3.1 8.5S14.1 18.2 12 20.5M12 3.5C9.9 5.8 8.9 8.7 8.9 12s1 6.2 3.1 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

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
    <footer className="ad-footer ad-footer--full">
      <div className="container ad-footer__grid">
        <div>
          <div className="ad-logo ad-logo--footer">
            <span className="ad-logo__badge"><BrandIcon /></span>
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
                  {column.title === "Contact" && idx === 0 ? <PinIcon /> : null}
                  {column.title === "Contact" && idx === 1 ? <PhoneIcon /> : null}
                  {column.title === "Contact" && idx === 2 ? <MailIcon /> : null}
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
          <span className="ad-footer__bottom-globe"><GlobeIcon /></span>
        </div>
      </div>
    </footer>
  );
}
