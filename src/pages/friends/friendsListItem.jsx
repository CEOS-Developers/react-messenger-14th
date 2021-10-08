import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Chattingroom from '../chatting/chattingroom';

const FriendsListItem = ({ user }) => {
  const name = useRef();

  return (
    <StyledLink to={`/chattingroom/${user.id}`}>
      <StyledLi>
        <StyledImg src={user.profilePicture} alt="프로필 사진" />
        <UserInfo>
          <UserName ref={name}>{user.name}</UserName>
          <UserStatusMessage>{user.statusMessage}</UserStatusMessage>
        </UserInfo>
      </StyledLi>
    </StyledLink>
  );
};

export const StyledImg = styled.img`
  width: 10vh;
  height: 10vh;
  border-radius: 35%;
`;

const StyledLi = styled.li`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  :hover {
    background-color: #eeeeee;
  }
`;
export const UserInfo = styled.div`
  padding-left: 2vw;
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: 15px;
`;
const UserStatusMessage = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin-top: 3px;
`;
const StyledLink = styled(Link)`
  all: unset;
  :hover {
    cursor: pointer;
  }
`;

export default FriendsListItem;
