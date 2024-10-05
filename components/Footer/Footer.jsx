"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <ul className={styles.footerLinks}>
          <li>
            <Link
              href="https://letterboxd.com/HillhouseRedd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MOVIES
            </Link>
          </li>
          <li>
            <Link
              href="https://www.goodreads.com/user/show/67400116-gordon-blake"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOKS
            </Link>
          </li>
          <li>
            <Link
              href="https://www.backloggd.com/u/GordonBlake/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GAMES
            </Link>
          </li>
          <li>
            <Link
              href="https://rateyourmusic.com/~GordonBlake"
              target="_blank"
              rel="noopener noreferrer"
            >
              MUSIC
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerCopyright}>
        <p>Copyright © 2024 Gordon Blake Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
