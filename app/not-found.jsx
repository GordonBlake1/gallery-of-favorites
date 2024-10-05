import Link from "next/link";
import styles from "@/styles/404.module.css";
import "@/styles/globals.css";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        We&apos;re probably taking a coffee break. Chill out, buddy!
      </p>
    </div>
  );
};

export default Custom404;
