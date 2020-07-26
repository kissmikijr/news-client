import React from "react";
import NewsFeedContent from "./news-feed-content";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URI = "https://neeews.herokuapp.com/api/news";

const NewsHeadlinesFeed = (props) => {
  const [feed, setFeed] = useState([]);
  const { country } = useParams();

  useEffect(() => {
    const evtSource = new EventSource(
      `${BASE_URI}/headlines?country=${country}`
    );

    evtSource.onmessage = (event) => {
      setFeed(JSON.parse(event.data));
    };
    return () => {
      evtSource.close();
    };
  }, [country]);

  return feed && feed.length > 0 ? (
    <div className="">
      <NewsFeedContent news={feed} />
    </div>
  ) : (
    <div> Waiting for neeews!</div>
  );
};

export default NewsHeadlinesFeed;
