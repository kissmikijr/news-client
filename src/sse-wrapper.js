import React from "react";
import { SSEProvider } from "react-hooks-sse";
import NewsHeadlinesFeed from "./news-headlines-feed";
import NewsFeedController from "./news-feed-controller";
import CountrySelector from "./country-selector";

const BASE_URI = "https://neeews.herokuapp.com/api/news";

export default function SSEWrapper() {
  return (
    <div className="mx-auto flex">
      <div className="fixed">
        <NewsFeedController />
        <CountrySelector />
      </div>
      <div className="post-container ml-48">
        <SSEProvider endpoint={`${BASE_URI}/headlines?country=hu`}>
          <NewsHeadlinesFeed />
        </SSEProvider>
      </div>
    </div>
  );
}
