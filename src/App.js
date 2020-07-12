import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import SSEWrapper from "./sse-wrapper";

function App() {
  return (
    <Flex className="App">
      <Navbar />
      <SSEWrapper />
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export default App;
