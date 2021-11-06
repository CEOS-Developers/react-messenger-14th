import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from '../@shared/components/Header';
import ChatRoomMessages from './components/ChatRoomMessages';
import ChatRoomMessageForm from './components/ChatRoomMessageForm';
import Main from '../@shared/components/Main';
import { useParams } from 'react-router-dom';
import useChatRoomContext from '../@shared/hooks/useChatRoom';

const ChatRoom = () => {
  const param = useParams().id;
  const { getChatRooms, setCurrentChatRoom } = useChatRoomContext();
  const chatRooms = getChatRooms();
  const newCurrentChatRoom = chatRooms.find((chatRoom) => {
    return chatRoom.id == param;
  });

  useEffect(() => {
    setCurrentChatRoom(newCurrentChatRoom);
  }, [newCurrentChatRoom]);

  return (
    <ChatRoomContainer>
      <Header />
      <Main>
        <ChatRoomMessages />
        <ChatRoomMessageForm />
      </Main>
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ChatRoom;
