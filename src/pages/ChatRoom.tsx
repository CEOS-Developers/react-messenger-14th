import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import user from '../data/user.json';
import Profile from '../components/Profile';
import ChatInput from '../components/Chat/ChatInput';
import Message from '../components/Chat/Message';
import savedChat from '../data/savedChat.json';
export interface IUser {
  id: number;
  name: string;
  status: string;
  profileImg: string;
}
export interface IChatList {
  chatId: number;
  text: string;
  userId: number;
}
function ChatRoom() {
  const userId = useParams();
  const roomId = parseInt(userId.id!) - 1;
  const [chatList, setChatList] = useState(savedChat[roomId].chat);
  const [currentUser, setCurrentUser] = useState<number>(0);
  const handleChangeUser = () => {
    console.log(roomId);
    currentUser ? setCurrentUser(0) : setCurrentUser(roomId + 1);
  };
  return (
    <Wrapper>
      <div onClick={handleChangeUser}>
        <Profile user={user[currentUser]} text={user[currentUser].status} />
      </div>
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
