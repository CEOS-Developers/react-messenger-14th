import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import ChatInput from '../components/Chat/ChatInput';
import Message from '../components/Chat/Message';
import savedChat from '../data/savedChat';
function ChatRoom() {
  const [chatList, setChatList] = useState(savedChat);
  const [currentUser, setCurrentUser] = useState(0);
  return (
    <Wrapper>
      <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Message chatList={chatList} />
      <ChatInput
        currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export default ChatRoom;
