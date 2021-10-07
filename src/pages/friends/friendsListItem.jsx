import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Chattingroom from '../chatting/chattingroom';

const FriendsListItem = ({ user }) => {
  const name = useRef();
  const handleClick = (e) => {
    console.log(name.current.innerText);
  };

  return (
    <StyledLink to={`/chattingroom/${user.id}`}>
      <StyledLi onClick={handleClick}>
        <Styledimg src={user.profilePicture} alt="프로필 사진" />
        <UserInfo>
          <UserName ref={name}>{user.name}</UserName>
          <UserStatusMessage>{user.statusMessage}</UserStatusMessage>
        </UserInfo>
      </StyledLi>
    </StyledLink>
  );
};

const Styledimg = styled.img`
  width: 80px;
  height: 80px;
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
const UserInfo = styled.div`
  padding-left: 20px;
`;

const UserName = styled.div`
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
