import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../components/Profile';
import ChatInput from '../components/Chat/ChatInput';
import Message from '../components/Chat/Message';
import savedChat from '../data/savedChat';
function ChatRoom() {
  const userId = useParams();
  const roomId = userId.id - 1;
  const [chatList, setChatList] = useState(savedChat[roomId].chat);
  const [currentUser, setCurrentUser] = useState(0);
  return (
    <Wrapper>
      <Profile
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        userId={userId}
      />
      <Message chatList={chatList} />
      <ChatInput
        currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export default ChatRoom;
