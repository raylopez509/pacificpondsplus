import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundcontainer}>
        <div className={styles.textcontainer}>
          <p className={styles.summarytext}>
            If you need help cleaning your pond, we're the ones to help!
          </p>
          <h2 className={styles.servicelist}>We specialize in:</h2>
          <ul className={styles.list}>
            <li>Pools</li>
            <li>Fountains</li>
            <li>Koi Ponds</li>
          </ul>
          <h2 className={styles.locationlist}>We service the following:</h2>
          <ul className={styles.list}>
            <li>Los Angeles Region</li>
            <li>Orange County Region</li>
          </ul>
          <h2>Here's some work we have done:</h2>
        </div>
        <section className={styles.imagecontainer}>
          <h1>Before</h1>
          <h1>After</h1>
          <img src="pic1before.jpg"></img>
          <img src="pic1after.jpg"></img>
          <img src="pic2before.jpg"></img>
          <img src="pic2after.jpg"></img>
        </section>
        <section className={styles.endingtextcontainer}>
          If you're interested, please give us a call for a free estimate! We'll
          be happy to help!
        </section>
      </div>
    </main>
  );
}
