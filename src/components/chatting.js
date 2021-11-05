import React, {useState} from 'react';
import styled from 'styled-components';
import Chatcontent from './chatcontent';
import Inputmessage from './inputmessage';
import Profile from './profile';

function Chatting() {
    const [chatList, setChatList] = useState([]);
    const [currentUser, setCurrentUser] = useState(0);
    const handleChangeUser = () => {
        currentUser ? setCurrentUser(0) : setCurrentUser(1);
      };
  return (
    <Wrapper>
      <Profile currentUser={currentUser} handleChangeUser={handleChangeUser}/>
      <Chatcontent 
        chatList={chatList}
        />
      <Inputmessage currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}></Inputmessage>
    </Wrapper>
  );
}
const Wrapper = styled.div`
width: 100%
`;
export default Chatting;