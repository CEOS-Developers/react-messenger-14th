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
import Sidebar from './pages/common/sidebar';

//data의 type alias
export type User = {
  id: number;
  name: string;
  statusMessage: string;
  profilePicture: string;
  dialogue: { time: string; isMyDialogue: boolean; content: string }[];
};

//useReducer를 위한 선언
type State = User[];
type Action = {
  type: 'add_diaglogue';
};

//createContext의 파라미터용 초기값 설정
const initialState: State = data['users'];
const defaultDispatch: Dispatch<Action> = () => initialState;

//action 처리 세부 구현은 아직 하지 않은 상태,
//dispatch는 작동확인만하고 state위주로 사용
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add_diaglogue': {
      // console.log('add_diaglogue');
      return { ...state };
    }

    default:
      throw new Error('undefined action!');
  }
}

//Context생성, 초기값은 useReducer의 반환쌍
export const UsersContext = React.createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //아직 chattingRoom 정리 못해 못지움..
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
            {/* Friends, Chatting에는 파라미터를 넘겨주지 않아도 됨. */}
            <Route exact path="/" render={() => <Cover />} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/chatting" render={() => <Chatting />} />
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
