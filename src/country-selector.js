import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const COUNTRIES = ["hu", "gb", "us"];

export default function CountrySelector(props) {
  const history = useHistory();
  const location = useLocation();
  const basePath = location.pathname.split("/");

  return (
    <div className="grid grid-cols-3 gap-4">
      {COUNTRIES.map((c) => (
        <span
          key={c}
          className={`flag-icon flag-icon-${c} cursor-pointer hover:shadow-outline`}
          onClick={() => history.push(`/${basePath[1]}/${c}`)}
        ></span>
      ))}
    </div>
  );
}
