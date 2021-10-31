import React, { useState } from 'react';
import styled from 'styled-components';
import users from '../data/user';
import TopBar from '../components/TopBar';
import SearchBox from '../components/SearchBox';
function FriendsList() {
  const [searchClick, setSearchClick] = useState(false);
  const [search, setSearch] = useState('');
  const onSearchButtonClicked = () => {
    setSearchClick(!searchClick);
  };
  const handleSearchInputChange = (e) => {
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
        <Wrapper key={user.id}>
          <Img src={process.env.PUBLIC_URL + '/img/' + user.profileImg}></Img>
          <NameWrapper>
            <Name>{user.name}</Name>
            <Status>{user.status}</Status>
          </NameWrapper>
        </Wrapper>
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;
const NameWrapper = styled.div`
  line-height: 25px;
  margin-left: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  margin-left: 20px;
`;
const Name = styled.p`
  font-weight: bold;
  margin: 0;
`;
const Status = styled.p`
  margin: 0;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  border: 1px solid lightgray;
`;
export default FriendsList;
