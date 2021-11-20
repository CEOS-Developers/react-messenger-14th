import React, { Fragment, useState } from 'react';
import Chatroom from '../chatRoom/Chatroom';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import useChatroomContext from '../hooks/useChatroomContext';
import SearchBar from '../base/SearchBar';

function ChatList(props: any) {
  const { getChatroomList } = useChatroomContext();
  const currentChattingRoom = getChatroomList();
  const [searchQuery, setSearchQuery] = useState('');

  // searchQuery에 의해 필터링된 리스트를 채팅 목록 컨테이너로 던진다.
  const filteredChatList = currentChattingRoom.filter((item) => {
    return item.name.indexOf(searchQuery) > -1;
  });

  return (
    <Fragment key={props.key}>
      <Route exact path="/chatlist">
        <StyledContainer>
          <StyledHeader>Chats</StyledHeader>
          <SearchBar searchText={searchQuery} />
          <ChatListContainer>
            <FilteredChatList filteredList={filteredChatList} />
          </ChatListContainer>
        </StyledContainer>
      </Route>
      <Route exact path="/chatlist/:friendId" render={() => <Chatroom />} />
    </Fragment>
  );
}

const FilteredChatList = ({ filteredList }: any) => {
  return filteredList.map((item: any) => {
    const { id, profileImage, name, lastMessage } = item;

    return (
      <Link to={`/chatlist/${id}`} style={{ textDecoration: 'none' }}>
        <SingleChatItem>
          <ChatItemProfileImage
            src={process.env.PUBLIC_URL + '/images/' + profileImage}
          />
          <ChatItemInfo>
            <FriendName>{name}</FriendName>
            <ChatLastMsg>{lastMessage}</ChatLastMsg>
          </ChatItemInfo>
        </SingleChatItem>
      </Link>
    );
  });
};

const StyledHeader = styled.div`
  font-size: 25px;
  font-weight: bolder;
  background-color: rgba(33, 33, 33, 0.35);
  padding: 20px;
  color: whitesmoke;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(33, 33, 33, 0.05);
`;

const ChatListContainer = styled.div`
  background-color: rgba(33, 33, 33, 0.05);
  padding: 10px;
  height: 100%;
`;

const SingleChatItem = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  border-radius: 15px;

  &:hover {
    background-color: rgba(33, 33, 33, 0.05);
  }
`;

const ChatItemProfileImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 25%;
  object-fit: cover;
  margin: 15px;
`;

const ChatItemInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
`;

const FriendName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const ChatLastMsg = styled.div`
  font-size: 14px;
  font-weight: medium;
  color: rgb(55, 55, 55);
  text-decoration: none;
  margin-top: 10px;
`;

export default ChatList;
