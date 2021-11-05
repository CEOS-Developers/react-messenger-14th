import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  width: 70px;
  height: 700px;
  position: fixed;
  background-color: #aee295;
`;

const MenuButton = styled.button`
  width: 6vw;
  height: auto;
  background: none;
  border: none;
  padding: 0;
  margin: 1vw;
  opacity: ${(props) => (props.clicked === 1 ? "100%" : "40%")};
  &:focus {
    outline: none;
    opacity: 100%;
  }
  &:hover {
    opacity: 60%;
  }
`;
const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  background-position: 0px 0px;
  &:focus {
    outline: none;
  }
`;

function MenuBar() {
  return (
    <MenuContainer>
     
    </MenuContainer>
  );
}

export default MenuBar;