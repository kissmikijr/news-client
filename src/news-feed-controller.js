import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MENU_ITEMS = [
  { displayName: "Headlines", url: "/headlines", default: true },
  { displayName: "Everything", url: "/everything" },
];
const NewsFeedController = (props) => {
  return (
    <div className="">
      {MENU_ITEMS.map((item) => (
        <MenuItem {...item} {...props} key={item.url}>
          {item.displayName}
        </MenuItem>
      ))}
    </div>
  );
};
const MenuItem = (props) => {
  const history = useHistory();
  const [toggled, setToggled] = React.useState(props.default);
  return (
    <StyledMenuItem
      key={props.url}
      onClick={() => {
        setToggled((s) => !s);
        history.push(`${props.url}/${props.country}`);
      }}
      className={`${toggled ? "bg-red-600" : ""}`}
    >
      {props.children}
    </StyledMenuItem>
  );
};
const StyledMenuItem = styled.div`
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
