import React, {useState} from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import ChatContent from './ChatContent';
import InputMessage from './InputMessage';

function Chatting() {
    const [chatList, setChatList] = useState([]);
  return (
    <Wrapper>
      <Profile />
      <ChatContent chatList={chatList}/>
      <InputMessage chatList={chatList} setChatList={setChatList}></InputMessage>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default Chatting;