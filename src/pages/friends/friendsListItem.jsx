import React from 'react';
import styled from 'styled-components';

const FriendsListItem = ({ user }) => {
  return (
    <StyledLi>
      <Styledimg src={user.profilePicture} alt="프로필 사진" />
      <UserInfo>
        <UserName>{user.name}</UserName>
        <UserStatusMessage>{user.statusMessage}</UserStatusMessage>
      </UserInfo>
    </StyledLi>
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

export default FriendsListItem;
