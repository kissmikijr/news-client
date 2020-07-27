import React from "react";
import styled from "styled-components";
import Content from "./content";
import Navbar from "./navbar";
import NewsFeedController from "./news-feed-controller";
import CountrySelector from "./country-selector";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [country, setCountry] = React.useState("hu");

  const handleCountryChange = (country) => {
    setCountry(country);
  };
  return (
    <Flex className="App">
      <Router>
        <Navbar />
        <div className="post-container w-full block md:hidden mb-6 mx-auto">
          <div className="mb-3">
            <NewsFeedController country={country} />
          </div>
          <CountrySelector handleCountryChange={handleCountryChange} />
        </div>
        <Content />
      </Router>
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export default App;
