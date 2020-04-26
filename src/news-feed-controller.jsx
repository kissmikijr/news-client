import React, { useState } from "react";
import styled from "styled-components";

const MENU_ITEMS = [
  { displayName: "Headlines", url: "headlines" },
  { displayName: "Everything", url: "everything" },
];
const NewsFeedController = (props) => {
  const [country, setCountry] = useState("");
  const [selected, setSelected] = useState({});

  const handleMenu = (item) => {
    props.sendSelected(item.url);
    setSelected(item);
  };
  const sendCountry = () => {
    this.props.sendCountry(country);
  };
  return (
    <Flex>
      {MENU_ITEMS.map((item) => (
        <MenuItem onClick={() => handleMenu(item)}>{item.displayName}</MenuItem>
      ))}
    </Flex>
  );
};
const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  min-height: 100px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid grey;
`;
const MenuItem = styled.div`
  font-weight: 450;
  font-size: 1.2rem;
  margin-right: 10px;
  cursor: pointer;
`;
export default NewsFeedController;
