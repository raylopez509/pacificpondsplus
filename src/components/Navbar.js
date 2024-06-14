import Link from "next/link";
import styles from "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Navbar;
