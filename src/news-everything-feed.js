import React from "react";
import NewsFeedContent from "./news-feed-content";
import { useEffect, useState } from "react";

const BASE_URI = "https://neeews.herokuapp.com/api/news";
const NewsEverythingFeed = (props) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const evtSource = new EventSource(
      `${BASE_URI}/headlines?country=${props.country}`
    );

    evtSource.onmessage = (event) => {
      console.log(event.data, "@@");
      setFeed(JSON.parse(event.data));
    };
  }, [props.country]);

  return feed && feed.length > 0 ? (
    <div className="">
      <NewsFeedContent news={feed} />
    </div>
  ) : (
    <div> Waiting for messages</div>
  );
};
export default NewsEverythingFeed;
