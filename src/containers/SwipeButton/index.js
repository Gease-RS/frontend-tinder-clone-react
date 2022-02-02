import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReply,
  faHeart,
  faTimes,
  faBolt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SwipeButtonContainer = styled.div`
  position: fixed;
  bottom: 1vh;
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 400px) {
    bottom: 5vh;
  }
`;

const SwipeButtonsIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.1);
`;

const SwipeButtonRepeat = styled.div`
  color: blue !important;
`;

const SwipeButtonClose = styled.div`
  padding: 3vw;
  color: brown !important;
  }
`;

const SwipeButtonStar = styled.div`
  padding: 3vw;
  color: rgb(199, 199, 0) !important;
`;

const SwipeButtonFavorite = styled.div`
  padding: 3vw;
  color: red !important;
`;

const SwipeButtonLightning = styled.div`
  padding: 3vw;
  color: gold !important;
`;

export default function SwipeButton() {
  return (
    <SwipeButtonContainer>
      <SwipeButtonsIcon>
        <SwipeButtonRepeat>
          <FontAwesomeIcon icon={faReply} />
        </SwipeButtonRepeat>
      </SwipeButtonsIcon>

      <SwipeButtonsIcon>
        <SwipeButtonClose>
          <FontAwesomeIcon icon={faTimes} />
        </SwipeButtonClose>
      </SwipeButtonsIcon>

      <SwipeButtonsIcon>
        <SwipeButtonFavorite>
          <FontAwesomeIcon icon={faHeart} />
        </SwipeButtonFavorite>
      </SwipeButtonsIcon>

      <SwipeButtonsIcon>
        <SwipeButtonStar>
          <FontAwesomeIcon icon={faStar} />
        </SwipeButtonStar>
      </SwipeButtonsIcon>

      <SwipeButtonsIcon>
        <SwipeButtonLightning>
          <FontAwesomeIcon icon={faBolt} />
        </SwipeButtonLightning>
      </SwipeButtonsIcon>
    </SwipeButtonContainer>
  );
}
