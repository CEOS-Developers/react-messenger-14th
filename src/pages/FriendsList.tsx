import React, { useState } from 'react';
import styled from 'styled-components';
import users from '../data/user.json';
import TopBar from '../components/TopBar';
import SearchBox from '../components/SearchBox';
import Profile from '../components/Profile';
function FriendsList() {
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const onSearchButtonClicked = () => {
    setSearchClick(!searchClick);
  };
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const userSearchResult = users.filter((user) => {
    return user.name.includes(search);
  });
  return (
    <Container>
      <TopBar current="friends" onSearchButtonClicked={onSearchButtonClicked} />
      {searchClick ? (
        <SearchBox
          searchClick={searchClick}
          setSearchClick={setSearchClick}
          handleInputChange={handleSearchInputChange}
        />
      ) : (
        ''
      )}
      {userSearchResult.map((user) => (
        <Profile user={user} text={user.status} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 0 10px;
`;
export default FriendsList;
