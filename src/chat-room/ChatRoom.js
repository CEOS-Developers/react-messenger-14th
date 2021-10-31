import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import ChatRoomMessages from './components/ChatRoomMessages';
import ChatRoomMessageForm from './components/ChatRoomMessageForm';

const ChatRoom = () => {
  return (
    <ChatRoomContainer>
      <Header></Header>
      <ChatRoomMessageContainer>
        <ChatRoomMessages></ChatRoomMessages>
        <ChatRoomMessageForm></ChatRoomMessageForm>
      </ChatRoomMessageContainer>
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatRoomMessageContainer = styled.div`
  width: 400px;
  height: 550px;

  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
`;

export default ChatRoom;
