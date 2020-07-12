import React from "react";
import NewsFeedContent from "./news-feed-content";
import styled from "styled-components";
import { defaults } from "./styles/constants";
import { useSSE } from "react-hooks-sse";

const NewsHeadlinesFeed = () => {
  const message = useSSE("message", []);

  return message && message.length > 0 ? (
    <NewsContainer>
      <NewsFeedContent news={message} />
    </NewsContainer>
  ) : (
    <div> Waitng for messages</div>
  );
};
const NewsContainer = styled.div`
  width: 720px;
  margin-top: ${defaults.navBarHeight};
  margin: auto;
`;

export default NewsHeadlinesFeed;
