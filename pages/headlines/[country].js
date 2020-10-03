import Navbar from "../../components/Navbar";
import Drawer from "../../components/Drawer";
import styles from "./[country].module.css";

export default function Country({ data }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className="post-container mx-auto">
        <div className="flex">
          <Drawer />
          <div>
            {data.map((news, index) => (
              <div className={styles.news_card_container} key={index}>
                <div className="">
                  <div className="">{news.source.name}</div>
                  <div className={styles.title}>{news.title}</div>
                </div>
                <img
                  className={styles.thumbnail}
                  src={news.urlToImage}
                  alt="yikes"
                />
                <div className="text-left mb-2">{news.description}</div>
                <div className="text-left text-xs opacity-75">
                  {news.publishedAt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const iFrameModalStyle = {
  content: {
    height: "100vh",
    width: "95%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export async function getServerSideProps({ params }) {
  const { country } = params;
  const res = await fetch(
    `https://neeews.herokuapp.com/api/news/headlines?country=${country}`
  );
  const data = await res.json();
  return { props: { data } };
}
