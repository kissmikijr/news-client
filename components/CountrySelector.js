import React from "react";
import "./CountrySelector.module.css";

const COUNTRIES = ["hu", "gb", "us"];

export default function CountrySelector(props) {
  return (
    <div className="country-selector">
      {COUNTRIES.map((c) => (
        <span
          key={c}
          className={`flag-icon flag-icon-${c} cursor-pointer hover:shadow-outline`}
        ></span>
      ))}
    </div>
  );
}
