import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundcontainer}>
        <div className={styles.textcontainer}>
          <div className={styles.summarytext}>
            If you need help cleaning your pond, we're the ones to help!
          </div>
          <div className={styles.servicelist}>
            We specialize in:
            <li>Pools</li>
            <li>Fountains</li>
            <li>Koi Ponds</li>
          </div>
          <div className={styles.locationlist}>
            We service the following:
            <li>Los Angeles Region</li>
            <li>Orange County Region</li>
          </div>
          <div>Here's some work we have done:</div>
        </div>
        <div className={styles.imagecontainer}>
          <div>Before</div>
          <div>After</div>
          <img src="pic1before.jpg"></img>
          <img src="pic1after.jpg"></img>
          <img src="pic2before.jpg"></img>
          <img src="pic2after.jpg"></img>
        </div>
        <div className={styles.endingtextcontainer}>
          If you're interested, please give us a call for a free estimate! We'll
          be happy to help!
        </div>
      </div>
    </main>
  );
}
