import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComments } from "@fortawesome/free-solid-svg-icons";
import Tinder from "../../assets/img/tinder.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  border-bottom: 1px solid #f9f9f900;
`;

const HeaderLogo = styled.div`
  padding-top: 10px;
  height: 40px;
  width: 40px;
`;

const HeaderIconLeft = styled.div`
  padding-left: 60px;
  color: black !important;
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const HeaderIconRight = styled.div`
  padding-right: 60px;
  color: black !important;
  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderIconLeft>
        <FontAwesomeIcon icon={faUser} />
      </HeaderIconLeft>
      <HeaderLogo>
        <img src={Tinder} alt="logo" />
      </HeaderLogo>
      <HeaderIconRight>
        <FontAwesomeIcon icon={faComments} />
      </HeaderIconRight>
    </HeaderContainer>
  );
}
