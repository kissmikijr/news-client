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
      <div className="mb-4 min-h-full">
        <div className="opacity-75 text-xs mb-2">{props.news.source.name}</div>
        <NewsTitle>{props.news.title}</NewsTitle>
      </div>
      <Thumbnail onClick={openModal} src={props.news.urlToImage} alt="yikes" />
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

      <div className="text-left mb-2">{props.news.description}</div>
      <div className="text-left text-xs opacity-75">
        {props.news.publishedAt}
      </div>
    </NewsCardContainer>
  );
};
const iFrameModalStyle = {
  content: {
    height: "100vh",
    width: "95%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Thumbnail = styled.img`
  cursor: pointer;
`;
const NewsCardContainer = styled.div`
  border: 1px solid rgb(204, 204, 204);
  width: 1005;
  margin: auto;
  margin-bottom: 50px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const NewsTitle = styled.div`
  font-weight: bold;
  margin-left: auto;
`;

export default NewsCard;
