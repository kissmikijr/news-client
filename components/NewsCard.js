import styles from "./NewsCard.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewsCard({ news }) {
  return (
    <div className={styles.news_card_container}>
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
      <img className={styles.thumbnail} src={news.urlToImage} alt="yikes" />
      <div className={styles.footer}>
        <div className={styles.description}>{news.description}</div>
        <div className={styles.date}>{news.publishedAt}</div>
      </div>
    </div>
  );
}
