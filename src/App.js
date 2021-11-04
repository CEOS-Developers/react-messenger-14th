import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import SideBar from './components/SideBar';
import ChattingList from './pages/ChattingList';
import FriendsList from './pages/FriendsList';
import ChatRoom from './pages/ChatRoom';
import Settings from './pages/Settings';
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Body>
          <Switch>
            <Route path="/friends" hello={'안녕'} component={FriendsList} />
            <Route path="/chat" component={ChattingList} />
            <Route path="/chatroom/:id" component={ChatRoom} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </Body>
      </Container>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  body {
    display:flex;
    width: 100vw;
    height: 100vh;
    justify-content:center;
    align-items: center;
    margin:0;
    font-family:'Goyang';
  }
  @font-face {
    font-family: 'Goyang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
const Container = styled.div`
  display: flex;
  width: 400px;
  height: 700px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 25px;
  background: white;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
`;
export default App;
