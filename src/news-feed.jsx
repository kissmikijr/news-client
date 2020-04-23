import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsCard from "./news-card";

const NewsFeed = () => {
  const [feedData, setFeedData] = useState([]);
  useEffect(() => {
    const getHeadlines = async () => {
      const result = await axios.get(
        "https://neeews.herokuapp.com/api/news/headlines"
      );
      setFeedData(result.data.data);
    };
    getHeadlines();
  }, []);
  console.log(feedData);
  return (
    <>
      {feedData.map((news) => (
        <NewsCard news={news} key={news.publishedAt} />
      ))}
    </>
  );
};
export default NewsFeed;
