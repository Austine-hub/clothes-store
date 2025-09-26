// src/components/Header.tsx
import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Social Media Icons (Left side) */}
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialLink}
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.socialIcon}
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.socialIcon}
            >
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className={styles.socialLink}
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.socialIcon}
            >
              <path d="M22.46 6c-.8.4-1.6.6-2.5.7a4.3 4.3 0 0 0 1.9-2.4c-.9.6-1.8 1-2.8 1.2a4.2 4.2 0 0 0-7.3 3c0 .3 0 .6.1.9-3.5-.2-6.6-1.8-8.6-4.3a4.2 4.2 0 0 0-.6 2.2c0 1.5.8 2.8 1.9 3.6-.7 0-1.4-.2-2-.6v.1c0 2.1 1.5 3.8 3.4 4.2-.4.1-.9.2-1.4.2-.3 0-.6 0-.9-.1.6 1.9 2.3 3.3 4.4 3.3A8.4 8.4 0 0 1 2 19c1.6 1 3.5 1.6 5.6 1.6 6.7 0 10.4-5.6 10.4-10.4v-.5c.7-.5 1.4-1.2 1.9-2z" />
            </svg>
          </a>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                New
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Men
                <svg
                  className={styles.chevron}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Women
                <svg
                  className={styles.chevron}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Kids
                <svg
                  className={styles.chevron}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Accessories
                <svg
                  className={styles.chevron}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* Right side icons */}
        <div className={styles.rightIcons}>
          <span className={styles.currency}>£</span>
          <button className={styles.iconButton}>
            <svg
              className={styles.searchIcon}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2" />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={styles.iconButton}>
            <svg
              className={styles.bagIcon}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6 2L3 6V20A2 2 0 0 0 5 22H19A2 2 0 0 0 21 20V6L18 2H6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 10A4 4 0 0 1 8 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
