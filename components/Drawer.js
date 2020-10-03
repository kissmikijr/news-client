import React from "react";
import CountrySelector from "./CountrySelector";
import styles from "./Drawer.module.css";

export default function Drawer() {
  return (
    <div className={styles.drawer}>
      <MenuItem>Headlines</MenuItem>
      <MenuItem>Everything</MenuItem>
      <CountrySelector />
    </div>
  );
}
const MenuItem = (props) => {
  return (
    <div className={styles.menu_item} key={props.url}>
      {props.children}
    </div>
  );
};
