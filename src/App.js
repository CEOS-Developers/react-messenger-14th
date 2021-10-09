import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Chatting from './components/Chatting';
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
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 25px;
  background: white;

`;
function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Chatting />
    </Container>
    </>
  );
}

export default App;