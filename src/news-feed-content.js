import React, { useEffect, useState } from "react";
import NewsCard from "./news-card";

const scrollToRef = (nextRef) => {
  if (!nextRef || !nextRef.current) return;
  window.scrollTo({
    left: 0,
    top: nextRef.current.offsetTop - 190,
    behavior: "smooth",
  });
};

const NewsFeedContent = (props) => {
  const [refs, setRefs] = useState([]);
  let currentRef = 0;

  useEffect(() => {
    const refs = props.news.map(() => React.createRef());
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

    return () => {
      window.removeEventListener("keypress", keyPressHandler);
    };
  }, [currentRef, props.news]);

  const result = [];
  for (let i = 0; i < props.news.length; i++) {
    const news = props.news[i];
    result.push(
      <div ref={refs[i]} key={i}>
        <NewsCard news={news} />
      </div>
    );
  }
  return result;
};
export default NewsFeedContent;
