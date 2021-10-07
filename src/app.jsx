import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import chatting from './pages/chatting/chatting';
import friends from './pages/friends/friends';
import more from './pages/more/more';
import { BsFillPersonFill, BsFillChatFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import * as data from './data/data.json';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([...data['users']]);
  }, []);

  console.log('users:', users);
  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Nav>
          <StyledLink to="/friends">
            <BsFillPersonFill />
          </StyledLink>
          <StyledLink to="/chatting">
            <BsFillChatFill />
          </StyledLink>
          <StyledLink to="/more">
            <FiMoreHorizontal />
          </StyledLink>
        </Nav>
        <Route path="/chatting" component={chatting}></Route>
        <Route path="/friends" component={friends}></Route>
        <Route path="/more" component={more}></Route>
      </Router>
    </AppContainer>
  );
};

const GlobalStyle = createGlobalStyle`
:root{
  /* color */
  --color-side-bar:#e3e3e3;
  --color-side-bar-icon:#121212;
}

*{
  margin:0;
  box-sizing:border-box;
}
`;
const Nav = styled.nav`
  background-color: var(--color-side-bar);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 60px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  color: var(--color-side-bar-icon);
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
`;

export default App;
