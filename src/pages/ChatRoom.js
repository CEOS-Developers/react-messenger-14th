import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import ChatInput from '../components/ChatInput';
import Message from '../components/Message';
function ChatRoom() {
  const [chatList, setChatList] = useState([]);
  const [currentUser, setCurrentUser] = useState(0);
  const handleChangeUser = () => {
    currentUser ? setCurrentUser(0) : setCurrentUser(1);
  };
  return (
    <Wrapper>
      <Profile currentUser={currentUser} handleChangeUser={handleChangeUser} />
      <Message chatList={chatList} />
      <ChatInput
        currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}
      ></ChatInput>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export default ChatRoom;
