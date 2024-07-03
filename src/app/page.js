import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>If you need help cleaning your pond, we're the ones to help!</div>
      <div>Here's some work we have done:</div>
      <div className={styles.title}>
        <div>Before</div>
        <div>After</div>
      </div>
      <div className={styles.images}>
        <div className={styles.pic1}>
          <img className={styles.pic1before} src="pic1before.jpg"></img>
          <img className={styles.pic1after} src="pic1after.jpg"></img>
        </div>
        <div className={styles.pic2}>
          <img className={styles.pic2before} src="pic2before.jpg"></img>
          <img className={styles.pic2after} src="pic2after.jpg"></img>
        </div>
      </div>
    </main>
  );
}
