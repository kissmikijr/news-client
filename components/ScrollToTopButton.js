import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollToTop({ active }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { 
    setIsVisible(active > 0);
  }, [active]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return isVisible ? (
    <div onClick={scrollToTop} className={styles.button}>
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  ) : (
    <></>
  );
}
