import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import Content from "./content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Flex className="App">
      <Router>
        <Navbar />
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
