import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <p className={styles.paragraph}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <div className={styles.link}>Go back to Home</div>
      </Link>
    </div>
  );
}
