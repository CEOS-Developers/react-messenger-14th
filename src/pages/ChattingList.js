import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import users from '../data/user';
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
      {searchResult.map((chats) => {
        const lenChat = chats.chat.length;
        return (
          <StyledLink to={`/chatroom/${chats.userId}`} key={chats.userId}>
            <Wrapper>
              <Img
                src={
                  process.env.PUBLIC_URL +
                  '/img/' +
                  users[chats.userId].profileImg
                }
              />
              <NameWrapper>
                <Name>{users[chats.userId].name}</Name>
                <div>{chats.chat[lenChat - 1].text}</div>
              </NameWrapper>
            </Wrapper>
          </StyledLink>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  margin-left: 20px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  border: 1px solid lightgray;
`;
const NameWrapper = styled.div`
  line-height: 25px;
  margin-left: 10px;
`;
const Name = styled.div`
  font-weight: bold;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;
export default ChattingList;
