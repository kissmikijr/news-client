import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsCard from "./news-card";

const scrollToRef = (ref) => {
  if (!ref || !ref.current) return;
  window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: "smooth" });
};

const NewsFeed = () => {
  const [feedData, setFeedData] = useState([]);
  const [refs, setRefs] = useState([]);
  let currentRef = 0;

  useEffect(() => {
    const getHeadlines = async () => {
      const result = await axios.get(
        "https://neeews.herokuapp.com/api/news/headlines"
      );

      const refs = result.data.data.map(() => React.createRef());
      const keyPressHandler = (event) => {
        if (event.keyCode === 106 || event.charCode === 106) {
          scrollToRef(refs[currentRef + 1]);
          currentRef++;
        } else if (event.keyCode === 107 || event.charCode === 107) {
          if (currentRef === 0) return;
          scrollToRef(refs[currentRef - 1]);
          currentRef--;
        }
      };

      window.addEventListener("keypress", keyPressHandler);
      setRefs(refs);
      setFeedData(result.data.data);

      return () => {
        window.removeEventListener("keypress", keyPressHandler);
      };
    };
    getHeadlines();
  }, [currentRef]);

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
export default NewsFeed;
