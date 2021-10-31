import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { UserContextProvider } from './@shared/contexts/user';
import { ChatRoomContextProvider } from './@shared/contexts/chatRoom';

import ChatRoom from './chat-room/ChatRoom';
import Sidebar from './sidebar/Sidebar';

const App = () => {
  return (
    <UserContextProvider>
      <ChatRoomContextProvider>
        <GlobalStyle />
        <RootContainer>
          <Sidebar />
          <ChatRoom />
        </RootContainer>
      </ChatRoomContextProvider>
    </UserContextProvider>
  );
};

const GlobalStyle = createGlobalStyle`
    *:focus {
        /* all: unset; */
        outline: none;
    }
    body {
        width: 100vw; 
        height: 100vh;

        margin: 0;
        
        display: flex;
        justify-content: center;
        align-items: center;

        background: rgb(34,193,195);
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    }
`;

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export default App;
