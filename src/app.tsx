import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chatting from './pages/chatting/chatting';
import Friends from './pages/friends/friends';
import More from './pages/more/more';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import * as data from './data/data.json';
import Chattingroom from './pages/chatting/chattingroom';
import Cover from './pages/cover/cover';
import Sidebar from './pages/sidebar/sidebar';

type user = {
  id: number;
  name: string;
  statusMessage: string;
  profilePicture: string;
  dialogue: { time: string; isMyDialogue: boolean; content: string }[];
};

const App = () => {
  const [users, setUsers] = useState<user[]>([...data['users']]);
  useEffect(() => {
    setUsers([...data['users']]);
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Sidebar />
        <Content>
          <Route
            exact
            path="/"
            render={() => <Cover users={users} setUsers={setUsers} />}
          />
          <Route
            path="/friends"
            render={() => <Friends users={users} setUsers={setUsers} />}
          />
          <Route
            path="/chatting"
            render={() => <Chatting users={users} setUsers={setUsers} />}
          />
          <Route path="/more" render={() => <More />} />
          <Route
            path={`/chattingroom/:id`}
            render={() => <Chattingroom users={users} setUsers={setUsers} />}
          />
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

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
