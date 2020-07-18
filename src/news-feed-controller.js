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
    <div className="">
      {MENU_ITEMS.map((item) => (
        <MenuItem onClick={() => handleMenu(item)}>{item.displayName}</MenuItem>
      ))}
    </div>
  );
};
const MenuItem = styled.div`
  font-weight: 450;
  font-size: 1.2rem;
  margin-right: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: blue;
    border-bottom: 1px solid blue;
  }
`;
export default NewsFeedController;
