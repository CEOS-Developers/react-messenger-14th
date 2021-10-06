import React from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import ChatInput from '../components/ChatInput';
import Message from '../components/message';
function ChatRoom() {
  return (
    <Wrapper>
      <Profile />
      <Message />
      <ChatInput></ChatInput>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default ChatRoom;
