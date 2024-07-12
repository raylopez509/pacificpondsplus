import styles from "./page.module.css";
export default function AboutPage() {
  return (
    <>
      <p>
        With over 10 years of experience*, we specialize in aquatic features
        such as pools, spas, fountains, and ponds. Regardless of size or
        structure, we deliver routine maintenance as well as repairs.
      </p>
      <section className={styles.contact}>
        <img src="contactus.jpg" className={styles.image}></img>
        <section className={styles.socials}>
          <a href="tel:(657)217-0895">(657)217-0895</a>
          <div>
            <a href="mailto:pacificpondsplus@gmail.com">
              PacificPondsPlus@gmail.com
            </a>
          </div>
          <h1>Follow us on Instagram!</h1>
          <a href="https://www.instagram.com/pacificpondsplus/">
            @PacificPondsPlus
          </a>
        </section>
      </section>
      <p>*actual years of experience may be less than 10 years</p>
    </>
  );
}
