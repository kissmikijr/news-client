import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = function () {
      toggleVisibility();
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return isVisible ? (
    <div onClick={scrollToTop} className={styles.button}>
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  ) : (
    <></>
  );
}
