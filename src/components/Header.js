import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logocontainer}>
          <img className={styles.logo} src="pacificpondsplus.png"></img>
        </div>
        <div className={styles.title}>Pacific Ponds Plus</div>
        <div className={styles.phone}>(657)217-0895</div>
      </header>
    </>
  );
};

export default Header;
