import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import User from '../../app';
type FriendsListItemProps = {
  user: {
    id: number;
    name: string;
    statusMessage: string;
    profilePicture: string;
    dialogue: { time: string; isMyDialogue: boolean; content: string }[];
  };
};

const FriendsListItem: React.FC<FriendsListItemProps> = ({ user }) => {
  return (
    <FriendsListItemLink to={`/chattingroom/${user.id}`}>
      <ListItem>
        <StyledImg src={user.profilePicture} alt="프로필 사진" />
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserStatusMessage>{user.statusMessage}</UserStatusMessage>
        </UserInfo>
      </ListItem>
    </FriendsListItemLink>
  );
};

export const StyledImg = styled.img`
  width: 10vh;
  height: 10vh;
  border-radius: 35%;
`;

const ListItem = styled.li`
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
const FriendsListItemLink = styled(Link)`
  all: unset;
  :hover {
    cursor: pointer;
  }
`;

export default FriendsListItem;
