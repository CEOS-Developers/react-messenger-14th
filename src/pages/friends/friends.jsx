import React from 'react';
import styled from 'styled-components';
import FriendsListItem from './friendsListItem';

const Friends = ({ users, setUsers }) => {
  return (
    <FriendsContainer>
      <FriendsPageTitle>친구</FriendsPageTitle>
      <FriendsList>
        {users &&
          users.map((element) => (
            // children도 props의 일종으로 생각하자, 자식에서 한 번 더 렌더링해줘야 보임.
            <FriendsListItem key={element.id} user={element}></FriendsListItem>
          ))}
      </FriendsList>
    </FriendsContainer>
  );
};

const FriendsPageTitle = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const FriendsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FriendsContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #ffffff;
`;

export default Friends;
