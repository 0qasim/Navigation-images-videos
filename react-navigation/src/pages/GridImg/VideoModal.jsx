import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
`;

const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const VideoModal = ({ videoSrc, onClose, onNext, onPrev }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <VideoWrapper>
          <VideoPlayer controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoPlayer>
        </VideoWrapper>
        {/* Add Previous and Next buttons here if needed */}
      </ModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;
