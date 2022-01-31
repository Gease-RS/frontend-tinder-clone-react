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
  bottom: 5vh;
  display: flex;
  width: 90%;
  justify-content: space-evenly;
`;

const SwipeButtonsIcon = styled.div`
  background-color: #f8f8f8;
  box-shadow: -1 4px 20px -6px rgba(0, 0, 0, 0.75);
`;

const SwipeButtonRepeat = styled.div`
  padding: 3vw;
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
      <SwipeButtonRepeat>
        <SwipeButtonsIcon>
          <FontAwesomeIcon icon={faReply} />
        </SwipeButtonsIcon>
      </SwipeButtonRepeat>

      <SwipeButtonClose>
        <SwipeButtonsIcon>
          <FontAwesomeIcon icon={faTimes} />
        </SwipeButtonsIcon>
      </SwipeButtonClose>

      <SwipeButtonFavorite>
        <SwipeButtonsIcon>
          <FontAwesomeIcon icon={faHeart} />
        </SwipeButtonsIcon>
      </SwipeButtonFavorite>

      <SwipeButtonStar>
        <SwipeButtonsIcon>
          <FontAwesomeIcon icon={faStar} />
        </SwipeButtonsIcon>
      </SwipeButtonStar>

      <SwipeButtonLightning>
        <SwipeButtonsIcon>
          <FontAwesomeIcon icon={faBolt} />
        </SwipeButtonsIcon>
      </SwipeButtonLightning>
    </SwipeButtonContainer>
  );
}
