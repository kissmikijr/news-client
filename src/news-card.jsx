import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const NewsCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <NewsCardContainer>
      <img
        onClick={openModal}
        src={props.news.urlToImage}
        alt="yikes"
        width="720"
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={iFrameModalStyle}
      >
        <iframe
          title={props.news.title}
          src={props.news.url}
          height="100%"
          width="100%"
        ></iframe>
      </Modal>
      <Flex>
        <div>{props.news.source.name}</div>
        <NewsTitle>{props.news.title}</NewsTitle>
      </Flex>
      <Description>{props.news.description}</Description>
    </NewsCardContainer>
  );
};
const iFrameModalStyle = {
  content: {
    height: "100vh",
    width: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const NewsCardContainer = styled.div`
  border: 1px solid rgb(204, 204, 204);
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

const Description = styled.div`
  text-align: left;
`;
export default NewsCard;
