import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>If you need help cleaning your pond, we're the ones to help!</div>

      <div>
        We service the following:
        <li>Los Angeles Region</li>
        <li>Orange County Region</li>
      </div>

      <div>Here's some work we have done:</div>

      <div className={styles.imagecontainer}>
        <div>Before</div>
        <div>After</div>
        <img className={styles.a1} src="pic1before.jpg"></img>
        <img className={styles.a2} src="pic1after.jpg"></img>
        <img className={styles.a3} src="pic2before.jpg"></img>
        <img className={styles.a4} src="pic2after.jpg"></img>
      </div>
      <div>
        If you're interested, please give us a call! We'll be happy to help!
      </div>
    </main>
  );
}
