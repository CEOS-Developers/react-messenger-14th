import React from 'react';
import styled from 'styled-components';
import { UserI } from '../../@shared/contexts/user';
import useUserContext from '../../@shared/hooks/useUser';
import UserListItem from './UserListItem';

const UserList = () => {
  const { getUsers } = useUserContext();
  const allUsers = getUsers();

  return (
    <Wrapper>
      {allUsers.map((user: UserI) => (
        <UserListItem user={user} />
      ))}
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
