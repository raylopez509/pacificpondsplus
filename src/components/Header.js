import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.logocontainer}>
          <img className={styles.logo} src="pacificpondsplus.png"></img>
        </section>
        <div className={styles.title}>Pacific Ponds Plus</div>
        <a className={styles.phone} href="tel:(657)217-0895">
          (657)217-0895
        </a>
      </header>
    </>
  );
};

export default Header;
