import React from 'react';
import styled from 'styled-components';
import Header from '../@shared/components/Header';
import Main from '../@shared/components/Main';
import useUserContext from '../@shared/hooks/useUser';
import UserList from './components/UserList';

const Users = () => {
  const { getUsers } = useUserContext();
  const users = getUsers();

  return (
    <Wrapper>
      <Header />
      <Main>
        <UserList />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Users;
