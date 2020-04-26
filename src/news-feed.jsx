import React, { useEffect, useState } from "react";
import NewsFeedContent from "./news-feed-content";
import NewsFeedController from "./news-feed-controller";
import styled from "styled-components";
import axios from "axios";

const NewsFeed = () => {
  const [selected, setSelected] = useState("headlines");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      if (selected === "headlines") {
        var result = await axios.get(
          "https://neeews.herokuapp.com/api/news/headlines",
          { params: { country: "hu" } }
        );
        setNews(result.data.data.headlines);
      } else if (selected === "everything") {
        result = await axios.get(
          "https://neeews.herokuapp.com/api/news/everything",
          { params: { domains: "index.hu,origo.hu" } }
        );
        setNews(result.data.data["index.hu"].everything);
      }
      console.log(result);
    };
    getNews();
  }, [selected]);

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
