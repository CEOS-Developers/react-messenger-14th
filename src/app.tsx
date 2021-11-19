import * as React from 'react';
import { useEffect, useState, useReducer, Dispatch, Reducer } from 'react';
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

export type User = {
  id: number;
  name: string;
  statusMessage: string;
  profilePicture: string;
  dialogue: { time: string; isMyDialogue: boolean; content: string }[];
};

type State = User[];
type Action = {
  type: 'add_diaglogue';
  literal: string;
};

const initialState: State = data['users'];
const defaultDispatch: Dispatch<Action> = () => initialState;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add_diaglogue': {
      console.log('add_diaglogue');
      return { ...state };
    }

    default:
      throw new Error('undefined action!');
  }
}

export const UsersContext = React.createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [users, setUsers] = useState(initialState);

  useEffect(() => {
    setUsers([...data['users']]);
  }, []);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      <AppContainer>
        <GlobalStyle />
        <Router>
          <Sidebar />
          <Content>
            <Route exact path="/" render={() => <Cover />} />
            <Route path="/friends" render={() => <Friends />} />
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
    </UsersContext.Provider>
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
