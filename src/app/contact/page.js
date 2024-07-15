import styles from "./page.module.css";
export default function AboutPage() {
  return (
    <>
      <p className={styles.text}>
        With over 10 years of experience, we specialize in aquatic features such
        as pools, spas, fountains, and ponds. Regardless of size or structure,
        we deliver routine maintenance as well as repairs.
      </p>
      <section className={styles.contact}>
        <img src="contactus.jpg" className={styles.image}></img>
        <section className={styles.socials}>
          <p>
            Phone:{" "}
            <a className={styles.phone} href="tel:(657)217-0895">
              (657)217-0895
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              className={styles.email}
              href="mailto:pacificpondsplus@gmail.com"
            >
              PacificPondsPlus@gmail.com
            </a>
          </p>
          <p>
            Follow us on Instagram!{" "}
            <a href="https://www.instagram.com/pacificpondsplus/">
              @PacificPondsPlus
            </a>
          </p>
        </section>
      </section>
      <h1 className={styles.text}>Call now for a free estimate!</h1>
    </>
  );
}
