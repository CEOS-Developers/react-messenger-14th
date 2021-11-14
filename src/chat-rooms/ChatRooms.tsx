import React from 'react';
import Header from '../@shared/components/Header';
import Main from '../@shared/components/Main';
import CreateChatRoom from './components/CreateChatRoom';
import ChatRoomList from './components/ChatRoomList';
import styled from 'styled-components';

const ChatRooms = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <CreateChatRoom />
        <ChatRoomList />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ChatRooms;
