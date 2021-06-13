import styles from "./NewsCard.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';

export default function NewsCard({ news, country, active, setActive }) {
  const scrollRef = useRef();
  useEffect(() => {
    if(active && scrollRef.current) {
      scrollRef.current.scrollIntoView({behavior: "smooth", block: "center"});
    }
  }, [active]);

  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if(inView) {
      setActive(true);
    }
  }, [inView]);

  return (
    <div ref={scrollRef}>
      <div ref={ref} className={styles.news_card_container}>
        <div className={styles.header}>
          <div className="flex">
            <div className={styles.source}>{news.source.name}</div>
            <div className={styles.menu}>
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon width="20px" height="20px" icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className={styles.title}>{news.title}</div>
        </div>
        <a href={news.url} target="_blank" rel="noopener noreferrer">
            <img className={styles.thumbnail} src={news.urlToImage} alt="thumbnail" />
        </a>
        <div className={styles.footer}>
          <div className={styles.description}>{news.description}</div>
          <div className={styles.date}>{new Date(news.publishedAt).toLocaleString(country)}</div>
        </div>
      </div>
    </div>
  );
}
