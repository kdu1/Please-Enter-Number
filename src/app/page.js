import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Please Enter Number:</h1>
      <div>
        Entered numbers go here
      </div>
      <div className={styles.description}>
        <div classname={styles.topContainer}><button>Backspace</button></div>
        <div className={styles.grid}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
          <button>0</button>
          <button>#</button>
        </div>
        <div classname={styles.bottomContainer}><button>Call</button></div>
      </div>
      <div>Subtitles</div>
    </main>
  );
}
