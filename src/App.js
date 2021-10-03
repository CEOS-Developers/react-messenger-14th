import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import CoupleChatRoomHeader from './couple-chat-room/components/CoupleChatRoomHeader';
import ChatRoomMessages from './@shared/components/ChatRoomMessages';
import ChatRoomMessageForm from './@shared/components/ChatRoomMessageForm';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RootContainer>
        <CoupleChatRoomHeader></CoupleChatRoomHeader>
        <ChatRoomMessages></ChatRoomMessages>
        <ChatRoomMessageForm></ChatRoomMessageForm>
      </RootContainer>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
    *:focus {
        outline: none;
    }
    body {
        margin: 0;
        
        width: 100vw;
        height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;
        background: #2ec1ac;
    }
`;

const RootContainer = styled.div`
  width: 550px;
  height: 900px;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
