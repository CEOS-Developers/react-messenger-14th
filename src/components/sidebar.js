import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import User from './main'
import Chatting from './chatting'
const MenuContainer = styled.div`
  width: 50px;
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
  margin-top: 50px;

  &:focus {
    outline: none;
    opacity: 100%;
  }
  &:hover {
    opacity: 60%;
  }
`;
const ButtonImage = styled.img`
  width: 30px;
  height: 30px;
  background-position: 0px 0px;
  &:focus {
    outline: none;
  }
`;

function MenuBar() {
  return (
    <MenuContainer>
      <Link to="/main" >
        <MenuButton>
          <ButtonImage src={process.env.PUBLIC_URL + "./assets/humanicon.png"} />
        </MenuButton>
      </Link>
      <Link to="/chatlist">
        <MenuButton>
          <ButtonImage src={process.env.PUBLIC_URL + "./assets/messageicon.png"} />
        </MenuButton>
      </Link>
    </MenuContainer>
  );
}

export default MenuBar;