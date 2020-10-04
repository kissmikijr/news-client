import React from "react";
import CountrySelector from "./CountrySelector";
import styles from "./Drawer.module.css";

export default function Drawer(props) {
  return (
    <div className={styles.drawer}>
      <MenuItem>Headlines</MenuItem>
      <CountrySelector onClick={props.onClick} />
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
