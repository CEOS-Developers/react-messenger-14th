import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Route from './@shared/hoc/Route';
import Header from './@shared/components/Header';
import ChatRoomMessages from './chat-room/components/ChatRoomMessages';
import ChatRoomMessageForm from './chat-room/components/ChatRoomMessageForm';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <RootContainer>
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
  width: 550px;
  height: 800px;

  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
`;

export default App;
