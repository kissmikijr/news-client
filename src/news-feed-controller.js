import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MENU_ITEMS = [
  { displayName: "Headlines", url: "/headlines", default: true },
  { displayName: "Everything", url: "/everything" },
];
const NewsFeedController = (props) => {
  return (
    <div className="flex md:block">
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
      className={`${
        toggled ? "bg-gray-400 font-medium" : ""
      } hover:bg-gray-300 w-full`}
    >
      {props.children}
    </StyledMenuItem>
  );
};
const StyledMenuItem = styled.div`
  font-size: 1.2rem;
  margin-right: 10px;
  padding-bottom: 10px;
  cursor: pointer;
`;
export default NewsFeedController;
