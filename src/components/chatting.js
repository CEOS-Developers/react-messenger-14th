import React, {useState} from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import ChatContent from './ChatContent';
import InputMessage from './InputMessage';

function Chatting() {
    const [chatList, setChatList] = useState([]);
    const [currentUser, setCurrentUser] = useState(0);
    const handleChangeUser = () => {
        currentUser ? setCurrentUser(0) : setCurrentUser(1);
      };
  return (
    <Wrapper>
      <Profile currentUser={currentUser} handleChangeUser={handleChangeUser}/>
      <ChatContent 
        chatList={chatList}
        />
      <InputMessage currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}></InputMessage>
    </Wrapper>
  );
}
const Wrapper = styled.div`

`;
export default Chatting;