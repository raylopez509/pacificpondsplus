"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className={styles.navbar}>
      {/* <Link href="/">Home</Link>
      <Link href="/contact">Contact Us</Link> */}
      {pathName === "/" ? <span>Home</span> : <Link href="/">Home</Link>}
      {pathName === "/contact" ? (
        <span>Contact Us</span>
      ) : (
        <Link href="/contact">Contact Us</Link>
      )}
    </nav>
  );
};

export default Navbar;
