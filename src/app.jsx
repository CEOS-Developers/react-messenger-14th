import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Chatting from './pages/chatting/chatting';
import Friends from './pages/friends/friends';
import More from './pages/more/more';
import { BsFillPersonFill, BsFillChatFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import * as data from './data/data.json';
import Chattingroom from './pages/chatting/chattingroom';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([...data['users']]);
  }, []);

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
        {/* Route에서 inline으로 component를 넘겨주면 렌더링 할 때마다 새로운 컴포넌트를 만든다. 비추천! */}
        <Content>
          <Route
            path="/friends"
            render={() => <Friends users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            path="/chatting"
            render={() => <Chatting users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            path="/more"
            render={() => <More users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            // regular expression
            path={`/chattingroom/:id(\d+)?:id`}
            render={() => <Chattingroom users={users} setUsers={setUsers} />}
          ></Route>
        </Content>
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
  width: 7vmax;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const StyledLink = styled(Link)`
  color: var(--color-side-bar-icon);
  width: 100%;
  text-align: center;
  font-size: 3vmax;
  margin-top: 30px;
`;

const Content = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
