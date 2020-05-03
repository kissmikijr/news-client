import React from "react";
import styled from "styled-components";
import { colors, defaults } from "./styles/constants";

const Navbar = () => {
  return (
    <Wrapper>
      <Base>
        <Title>Neeews!</Title>
      </Base>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: ${defaults.navBarHeight};
`;
const Base = styled.div`
  background-color: ${colors.mainColor};
  height: ${defaults.navBarHeight};
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  color: white;
  font-size: 25px;
`;
export default Navbar;
