import React from "react";
import NewsFeedContent from "./news-feed-content";
import styled from "styled-components";
import { defaults } from "./styles/constants";
import { useSSE } from "react-hooks-sse";

const NewsHeadlinesFeed = () => {
  const message = useSSE("message", []);

  return message && message.length > 0 ? (
    <div className="">
      <NewsFeedContent news={message} />
    </div>
  ) : (
    <div> Waitng for messages</div>
  );
};

export default NewsHeadlinesFeed;
