import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SideBar from './components/SideBar';
import ChatRoom from './pages/ChatRoom';
function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0;
  }
`;
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ChatRoom />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
`;
export default App;
