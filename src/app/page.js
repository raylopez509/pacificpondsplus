import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundcontainer}>
        <div className={styles.textcontainer}>
          <p className={styles.summarytext}>
            If you need help cleaning your pond, we're the ones to help!
          </p>
          <div className={styles.servicelist}>
            We specialize in:
            <ul>
              <li>Pools</li>
              <li>Fountains</li>
              <li>Koi Ponds</li>
            </ul>
          </div>
          <div className={styles.locationlist}>
            We service the following:
            <ul>
              <li>Los Angeles Region</li>
              <li>Orange County Region</li>
            </ul>
          </div>
          <p>Here's some work we have done:</p>
        </div>
        <div className={styles.imagecontainer}>
          <h2>Before</h2>
          <h2>After</h2>
          <img src="pic1before.jpg"></img>
          <img src="pic1after.jpg"></img>
          <img src="pic2before.jpg"></img>
          <img src="pic2after.jpg"></img>
        </div>
        <p className={styles.endingtextcontainer}>
          If you're interested, please give us a call for a free estimate! We'll
          be happy to help!
        </p>
      </div>
    </main>
  );
}
