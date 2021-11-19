import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import users from '../data/user';
import Profile from '../components/Profile';
import savedChat from '../data/savedChat';
import TopBar from '../components/TopBar';
import SearchBox from '../components/SearchBox';
function ChattingList() {
  const [searchClick, setSearchClick] = useState(false);
  const [search, setSearch] = useState('');
  const onSearchButtonClicked = () => {
    setSearchClick(!searchClick);
  };
  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };
  const searchResult = savedChat.filter((chat) => {
    return chat.name.includes(search);
  });
  return (
    <Container>
      <TopBar current="chat" onSearchButtonClicked={onSearchButtonClicked} />
      {searchClick ? (
        <SearchBox
          searchClick={searchClick}
          setSearchClick={setSearchClick}
          handleInputChange={handleSearchInputChange}
        />
      ) : (
        ''
      )}
      {searchResult.map((chats, i) => {
        const lenChat = chats.chat.length;
        return (
          <StyledLink to={`/chatroom/${chats.userId}`} key={chats.userId}>
            <Profile
              user={users[chats.userId]}
              text={chats.chat[lenChat - 1].text}
            />
          </StyledLink>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited,
  &:link {
    color: inherit;
  }
`;
export default ChattingList;
