import React, { useEffect, useState } from "react";
import NewsFeedContent from "./news-feed-content";
import NewsFeedController from "./news-feed-controller";
import styled from "styled-components";
import axios from "axios";

const NewsFeed = () => {
  const [selected, setSelected] = useState("headlines");
  const [news, setNews] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      if (selected === "headlines") {
        if (!listening) {
          const events = new EventSource(
            "https://neeews.herokuapp.com/api/news/headlines?country=hu"
          );
          events.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setNews(data.headlines);
          };
          setListening(true);
        }
      } else if (selected === "everything") {
        const result = await axios.get(
          "https://neeews.herokuapp.com/api/news/everything",
          { params: { domains: "index.hu,origo.hu" } }
        );
        setNews(result.data.data["index.hu"].everything);
      }
    };
    getNews();
  }, [selected, listening]);

  const getSelected = (selected) => {
    setSelected(selected);
  };

  return (
    <NewsContainer>
      <NewsFeedController sendSelected={getSelected} />
      <NewsFeedContent news={news} />
    </NewsContainer>
  );
};
const NewsContainer = styled.div`
  width: 720px;
  margin: auto;
`;

export default NewsFeed;
