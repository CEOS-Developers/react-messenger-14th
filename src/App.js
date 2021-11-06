import React, { useEffect, Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
} from 'react-router-dom';

import { UserContextProvider } from './@shared/contexts/user';
import { ChatRoomContextProvider } from './@shared/contexts/chatRoom';
import Loading from './@shared/components/Loading';

const ChatRooms = React.lazy(() => import('./chat-rooms/ChatRooms'));
const ChatRoom = React.lazy(() => import('./chat-room/ChatRoom'));
const Users = React.lazy(() => import('./users/Users'));
const Setting = React.lazy(() => import('./setting/Setting'));
const Sidebar = React.lazy(() => import('./@shared/components/Sidebar'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <UserContextProvider>
            <ChatRoomContextProvider>
              <GlobalStyle />
              <RootContainer>
                <Sidebar />
                <Route exact path={'/chat-rooms'} component={ChatRooms} />
                <Route exact path={'/users'} component={Users} />
                <Route exact path={'/setting'} component={Setting} />
                <Route exact path={'/chat-rooms/:id'} component={ChatRoom} />
                <Route exact path={'/'} component={ChatRooms} />
              </RootContainer>
            </ChatRoomContextProvider>
          </UserContextProvider>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

const GlobalStyle = createGlobalStyle`
    *:focus {
        /* all: unset; */
        outline: none;
    }
    body {
        width: 100vw; 
        height: 100vh;

        margin: 0;
        
        display: flex;
        justify-content: center;
        align-items: center;

        background: rgb(34,193,195);
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    }
`;

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export default App;
