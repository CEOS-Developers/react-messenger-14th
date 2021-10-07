import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import ChatInput from '../components/ChatInput';
import Message from '../components/message';
function ChatRoom() {
  const [chatList, setChatList] = useState([]);
  console.log(chatList);
  return (
    <Wrapper>
      <Profile />
      <Message chatList={chatList} />
      <ChatInput chatList={chatList} setChatList={setChatList}></ChatInput>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default ChatRoom;
