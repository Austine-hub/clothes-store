// src/components/Footer.tsx
import type { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  // Modernized footer sections for a clothes/fashion store
  const footerSections: [string, string[]][] = [
    ["Shop", ["Men", "Women", "Kids", "New Arrivals", "Sale"]],
    ["Customer Service", ["Shipping & Delivery", "Returns & Exchanges", "Size Guide", "FAQs", "Track Order"]],
    ["Company", ["About Us", "Careers", "Sustainability", "Contact"]],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <div className={styles.brandLogoWrapper}>
            <span className={styles.brandIcon}>
              <svg
                viewBox="0 0 24 24"
                className={styles.brandSvg}
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className={styles.brandText}>AjanjaClothes</span>
          </div>
          <p className={styles.tagline}>
            Style for Every Story — Trendy, Sustainable, Affordable
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} AjanjaClothes Ltd. All rights reserved.
          </p>
        </div>

        {/* Dynamic Footer Columns */}
        {footerSections.map(([heading, links], i) => (
          <div key={i} className={styles.footerColumn}>
            <h4 className={styles.columnHeading}>{heading}</h4>
            <ul className={styles.columnList}>
              {links.map((link, j) => (
                <li key={j} className={styles.columnListItem}>
                  <a className={styles.columnLink} href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Subscription */}
        <div className={styles.newsletterSection}>
          <h4 className={styles.columnHeading}>Stay in the Loop</h4>
          <p className={styles.newsletterText}>
            Subscribe for updates on new arrivals, exclusive deals, and fashion tips.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <p className={styles.legalText}>
            Registered AjanjaClothes in Kenya • License No. 123456 • Customer Care Available 24/7.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms of Service
            </a>
            <a href="#" className={styles.legalLink}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

