import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundcontainer}>
        <div className={styles.textcontainer}>
          <h1 className={styles.summarytext}>
            If you need help cleaning your pond, we're the ones to help!
          </h1>
          <section className={styles.servicelistsection}>
            <h1 className={styles.servicelistheading}>We specialize in:</h1>
            <ul className={styles.list}>
              <li>Pools</li>
              <li>Fountains</li>
              <li>Koi Ponds</li>
            </ul>
          </section>
          <section className={styles.banner}>
            <img src="banner1.jpg"></img>
            <img src="banner2.jpg"></img>
            <img src="banner3.jpg"></img>
            <img src="banner4.jpg"></img>
            <img src="banner5.jpg"></img>
          </section>
          <section className={styles.locationlistsection}>
            <h1 className={styles.locationlistheading}>
              We service the following:
            </h1>
            <ul className={styles.locationlist}>
              <li>Los Angeles Region</li>
              <li>Orange County Region</li>
            </ul>
          </section>
          <h2>Here's some work we have done:</h2>
        </div>
        <section className={styles.imagecontainer}>
          <h1>Before</h1>
          <h1>After</h1>
          <img src="pic1before.jpg"></img>
          <img src="pic1after.jpg"></img>
          <img src="pic2before.jpg"></img>
          <img src="pic2after.jpg"></img>
          <img src="pic3before.jpg"></img>
          <img src="pic3after.jpg"></img>
        </section>
        <h1 className={styles.endingtextcontainer}>
          If you're interested, please give us a call for a free estimate! We'll
          be happy to help!
        </h1>
      </div>
    </main>
  );
}
