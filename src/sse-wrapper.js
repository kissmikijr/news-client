import React from "react";
import { SSEProvider } from "react-hooks-sse";
import NewsHeadlinesFeed from "./news-headlines-feed";

const BASE_URI = "https://neeews.herokuapp.com/api/news";

export default function SSEWrapper() {
  return (
    <SSEProvider endpoint={`${BASE_URI}/headlines?country=hu`}>
      <NewsHeadlinesFeed />
    </SSEProvider>
  );
}
