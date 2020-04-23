import React from "react";
import styled from "styled-components";

const NewsCard = (props) => {
  return (
    <NewsCardContainer>
      <a href={props.news.url} target="_blank" rel="noopener noreferrer">
        <img src={props.news.urlToImage} alt="yikes" width="720" />
      </a>
      <Flex>
        <div>{props.news.source.name}</div>
        <NewsTitle>{props.news.title}</NewsTitle>
      </Flex>
      <div>{props.news.description}</div>
    </NewsCardContainer>
  );
};

const NewsCardContainer = styled.div`
  width: 720px;
  margin: auto;
  margin-bottom: 50px;
`;

const NewsTitle = styled.div`
  font-weight: bold;
  margin-left: auto;
`;

const Flex = styled.div`
  display: flex;
`;
export default NewsCard;
