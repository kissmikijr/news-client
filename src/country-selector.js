import React from "react";

const COUNTRIES = ["hu", "gb", "ca", "us", "de"];

export default function CountrySelector(props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {COUNTRIES.map((c) => (
        <span
          key={c}
          className={`flag-icon flag-icon-${c} cursor-pointer`}
          onClick={() => props.handleCountryChange(c)}
        ></span>
      ))}
    </div>
  );
}
