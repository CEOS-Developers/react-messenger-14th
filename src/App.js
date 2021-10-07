import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SideBar from './components/SideBar';
import ChatRoom from './pages/ChatRoom';
function App() {
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
const GlobalStyle = createGlobalStyle`
  body {
    display:flex;
    justify-content:center;
    margin:0;
  }
`;
const Container = styled.div`
  display: flex;
  width: 400px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 25px;
  background: white;
`;
export default App;
