import { React } from "react";
import ImgView from "../components/extract/ImgView";
import TextView from "../components/extract/TextView";
import styles from "./Extract.module.css";

function Extract() {
  return (
    <div>
      <header className={styles.header}></header>
      <nav className={styles.state}></nav>
      <main>
        <div className={styles.container}>
          <section className={styles.viewBox}>
            <ImgView />
          </section>
          <section className={styles.viewBox}>
            <TextView />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Extract;
