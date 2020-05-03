import React from "react";
import NewsFeed from "./news-feed";
import Navbar from "./navbar";
import styled from "styled-components";

function App() {
  return (
    <Flex className="App">
      <Navbar />
      <NewsFeed />
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export default App;
