import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <div className={styles.title_wrapper}>
          <div className={styles.title}>Neeews!</div>
          <div className={styles.text}>powered by NewsAPI</div>
        </div>
      </div>
    </div>
  );
}
