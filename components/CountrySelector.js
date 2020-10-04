import React from "react";
import styles from "./CountrySelector.module.css";

const COUNTRIES = ["hu", "gb", "us"];

export default function CountrySelector(props) {
  return (
    <div className={styles.country_selector}>
      {COUNTRIES.map((country) => (
        <span
          key={country}
          onClick={() => props.onClick(country)}
          className={styles.country_flag + ` flag-icon flag-icon-${country}`}
        ></span>
      ))}
    </div>
  );
}
