import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Chatting from './components/chatting';
import User from './components/main'
import { HashRouter, Route } from "react-router-dom";
import MenuBar from './components/sidebar';


const GlobalStyle = createGlobalStyle`
  body {
    display:flex;
    width: 100vw;
    height: 100vh;
    justify-content:center;
    margin:0;
  }
`;
const Container = styled.div`
  display: flex;
  width: 400px;
  height: 700px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 20px;
  background: white;

`;
function App() {
  return (
    <HashRouter>
    <>
     <MenuBar />
    <GlobalStyle />
    <Container>
      <Route path = "/" component = {User} />
      <Route path = "/chatting" component={Chatting} />
    </Container>
    </>
    </HashRouter>
  );
}

export default App;