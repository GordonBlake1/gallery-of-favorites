"use client";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <Link href="/" rel="noopener noreferrer">
            St. Gordon&apos;s Gallery of Favorites
          </Link>
        </div>
      </div>
      <div className={styles.secondHeaderWrapper}>
        <ul className={styles.secondHeader}>
          <li>
            <Link href="/pre-1920s" rel="noopener noreferrer">
              <button>
                the beginnings, <br />
                pre-1920s
              </button>
            </Link>
          </li>
          <li>
            <Link href="/1930-1940s" rel="noopener noreferrer">
              <button>1930s-1940s</button>
            </Link>
          </li>
          <li>
            <Link href="/1950-1960s" rel="noopener noreferrer">
              <button>1950s-1960s</button>
            </Link>
          </li>
          <li>
            <Link href="/1970-1980s" rel="noopener noreferrer">
              <button>1970s-1980s</button>
            </Link>
          </li>
          <li>
            <Link href="/1990-2000s" rel="noopener noreferrer">
              <button>1990s-2000s</button>
            </Link>
          </li>
          <li>
            <Link href="/2010-2020s" rel="noopener noreferrer">
              <button>2010s-2020s</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
