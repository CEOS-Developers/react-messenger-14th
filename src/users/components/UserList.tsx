import React from 'react';
import styled from 'styled-components';
import { UserI } from '../../@shared/contexts/user';
import useUserContext from '../../@shared/hooks/useUser';
import UserListItem from './UserListItem';

const UserList = () => {
  const { getUsers, getCurrentUser } = useUserContext();
  const currentUser = getCurrentUser();
  const allUsers = getUsers();

  return (
    <Wrapper>
      {allUsers.map((user: UserI) => {
        if (user.id === currentUser.id) {
          return;
        }
        return <UserListItem user={user} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export default UserList;
