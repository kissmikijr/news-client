import React from "react";
import styled from "styled-components";
import { colors, defaults } from "./styles/constants";

const Navbar = () => {
  return (
    <Wrapper>
      <Base>
        <div className="flex items-center">
          <Title>Neeews!</Title>
          <div className="text-white text-opacity-50 text-xs ml-2">
            powered by NewsAPI
          </div>
        </div>
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
