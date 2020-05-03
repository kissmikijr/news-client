import React, { useEffect, useState } from "react";
import NewsFeedContent from "./news-feed-content";
import NewsFeedController from "./news-feed-controller";
import styled from "styled-components";
import { defaults } from "./styles/constants";

const BASE_URI = "https://neeews.herokuapp.com/api/news";

const NewsFeed = () => {
  const [selected, setSelected] = useState("headlines");
  const [news, setNews] = useState([]);
  const [eventStream, setEventStream] = useState();

  useEffect(() => {
    if (eventStream) {
      console.log("closing this event");
      eventStream.close();
    }
    if (selected === "headlines") {
      const events = new EventSource(`${BASE_URI}/headlines?country=hu`);
      events.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setNews(data.headlines);
      };
      setEventStream(events);
    } else if (selected === "everything") {
      const events = new EventSource(
        `${BASE_URI}/everything?domains=index.hu,origo.hu`
      );
      events.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setNews(data["index.hu"].everything);
      };
      setEventStream(events);
    }
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
  margin-top: ${defaults.navBarHeight};
  margin: auto;
`;

export default NewsFeed;
