import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import FriendsListItem from './friendsListItem';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { UsersContext } from '../../app';
import type { User } from '../../app';
import useCurrentUsers from '../../Hooks/useCurrentUsers';

const Friends = () => {
  const { state } = useContext(UsersContext);
  const { currentUsers, handleClickSearch, handleChange, isSearching } =
    useCurrentUsers(state);
  return (
    <FriendsContainer>
      <Header>
        <FriendsPageTitle>친구</FriendsPageTitle>
        <SearchButton onClick={handleClickSearch}>
          <BsSearch />
        </SearchButton>
      </Header>
      {isSearching && (
        <>
          <SearchBar
            onChange={handleChange}
            placeholder="검색어를 입력하세요."
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '검색어를 입력하세요.')}
          />
          <CloseButton onClick={handleClickSearch}>
            <GrClose />
          </CloseButton>
        </>
      )}
      <FriendsList>
        {currentUsers &&
          currentUsers.map((element: User) => (
            <FriendsListItem key={element.id} user={element}></FriendsListItem>
          ))}
      </FriendsList>
    </FriendsContainer>
  );
};

const CloseButton = styled.section`
  display: inline;
  margin-left: 5px;
  height: 7vw;
`;

const Header = styled.section`
  display: flex;
  margin-top: 35px;
`;

const SearchButton = styled.section`
  margin-left: 15px;
  margin-top: 5px;
`;
const SearchBar = styled.input`
  margin-left: 20px;
  width: 60vw;
  height: 30px;
  border-radius: 3vw;
  border: 1px solid;
  padding-left: 15px;
`;

const FriendsPageTitle = styled.div`
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
