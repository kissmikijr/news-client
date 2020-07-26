import React, { useState } from "react";
import NewsHeadlinesFeed from "./news-headlines-feed";
import NewsFeedController from "./news-feed-controller";
import NewsEverythingFeed from "./news-everything-feed";
import CountrySelector from "./country-selector";
import { Switch, Route, Redirect } from "react-router-dom";

export default function Content() {
  const [country, setCountry] = useState("hu");

  const handleCountryChange = (country) => {
    setCountry(country);
  };
  return (
    <div className="mx-auto flex">
      <div className="fixed">
        <NewsFeedController country={country} />
        <CountrySelector handleCountryChange={handleCountryChange} />
      </div>
      <div className="post-container ml-48">
        <Switch>
          <Route path="/headlines/:country">
            <NewsHeadlinesFeed />
          </Route>
          <Route path="/everything">
            <NewsEverythingFeed />
          </Route>
          <Route path="/">
            <Redirect to={`/headlines/${country}`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
