import React, { useEffect, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar.js';
import ChatList from '../chatList/ChatList';
import FriendsList from '../friendList/FriendsList';
import Friends from '../data/Friends.json';
import Chats from '../data/Chats.json';
import Settings from '../setting/Settings.js';
import UserContextProvider from '../contexts/userContext';
import ChatroomContextProvider from '../contexts/chatroomContext';
import AddFriend from '../friendList/AddFriend';

const GlobalStyle = createGlobalStyle`
  display: flex;
  body {
    margin: 0;
  }

  input:focus{
    outline: none;
  }
`;

const ChatAppContainer = styled.div`
  display: flex;
  width: 600px;
  height: 100vh;
  margin: auto;
  box-shadow: 5px 5px 20px 3px rgba(0, 0, 0, 0.25);
`;

const ChatApp: React.FC = () => {
  /*
  페이지를 처음 로딩할 때, 채팅 정보가 들어있는 json 파일을 불러온다.
  이후 이 json 파일을 localStorage에 저장하여 component간 주고받는다.
  */
  useEffect(() => {
    localStorage.setItem('ChatList', JSON.stringify(Chats));
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <UserContextProvider>
        <ChatroomContextProvider>
          <ChatAppContainer>
            <Router>
              <Route
                exact
                path={['/', '/chatlist', '/settings', '/new']}
                component={NavBar}
              />
              <Switch>
                <Route exact path="/">
                  <FriendsList />
                </Route>
                <Route path="/new">
                  <AddFriend />
                </Route>
                <Route path="/chatlist">
                  <ChatList key={Date.now()} />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
              </Switch>
            </Router>
          </ChatAppContainer>
        </ChatroomContextProvider>
      </UserContextProvider>
    </Fragment>
  );
};

export default ChatApp;
