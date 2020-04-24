import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsCard from "./news-card";

const scrollToRef = (ref) => {
  console.log(ref);
  window.scrollTo(0, ref.current.offsetTop);
};

const NewsFeed = () => {
  const [feedData, setFeedData] = useState([]);
  const [currentRef, setCurrentRef] = useState(0);

  useEffect(() => {
    window.addEventListener("keypress", keyPress);
    const getHeadlines = async () => {
      const result = await axios.get(
        "https://neeews.herokuapp.com/api/news/headlines"
      );
      setFeedData(result.data.data);
    };
    getHeadlines();

    return () => {
      window.removeEventListener("keypress", keyPress);
    };
  }, []);

  const refs = feedData.map((x) => React.createRef());
  console.log(refs, "@@");

  const keyPress = (event) => {
    console.log(refs);
    if (event.keyCode === 106 || event.charCode === 106) {
      scrollToRef(refs[currentRef - 1]);
      setCurrentRef(currentRef - 1);
    } else if (event.keyCode === 107 || event.charCode === 107) {
      scrollToRef(refs[currentRef + 1]);
      setCurrentRef(currentRef + 1);
    }
  };
  const renderFeed = () => {
    const result = [];
    for (let i = 0; i < feedData.length; i++) {
      const news = feedData[i];
      result.push(
        <div ref={refs[i]}>
          <NewsCard news={news} key={i} />
        </div>
      );
    }
    return result;
  };
  return <>{renderFeed()}</>;
};
export default NewsFeed;
