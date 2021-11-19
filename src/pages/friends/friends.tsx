import { useContext } from 'react';
import styled from 'styled-components';
import FriendsListItem from './friendsListItem';
import { UsersContext } from '../../app';
import type { User } from '../../app';
import useCurrentUsers from '../../Hooks/useCurrentUsers';
import { PageHeader } from '../common/pageHeader';

const Friends = () => {
  const { state } = useContext(UsersContext);
  const { currentUsers, handleClickSearch, handleChange, isSearching } =
    useCurrentUsers(state);

  return (
    <FriendsContainer>
      {PageHeader('친구', handleClickSearch, handleChange, isSearching)}
      <FriendsList>
        {currentUsers &&
          currentUsers.map((element: User) => (
            <FriendsListItem key={element.id} user={element}></FriendsListItem>
          ))}
      </FriendsList>
    </FriendsContainer>
  );
};

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
