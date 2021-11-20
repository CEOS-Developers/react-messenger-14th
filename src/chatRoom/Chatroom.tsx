import React, { useState, Fragment, useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MessageForm from './form.js';
import Header from './header.js';
import Message from './message.js';
import { useParams } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';
import useChatroomContext from '../hooks/useChatroomContext';

function Chatroom() {
  const { friendId } = useParams<{ friendId: string }>();
  const { getSingleFriend } = useUserContext();
  const { getCurrentChatroom, updateChatroomList } = useChatroomContext();
  // 채팅방의 parameter로 받은 id는 곧 친구의 id이다.
  const currentFriend = getSingleFriend(parseInt(friendId));
  const currentChatroom = getCurrentChatroom(friendId);

  const user = {
    you: {
      id: currentFriend.id,
      name: currentFriend.name,
      profileImage:
        process.env.PUBLIC_URL + '/images/' + currentFriend.profileImage,
    },
    me: {
      id: 0,
      name: 'Seon-Jong Kim',
      profileImage: process.env.PUBLIC_URL + '/images/sj.png',
    },
  };

  const [currentMessage, setCurrentMessage] = useState('');
  const [currentSendingUser, setCurrentSendingUser] = useState(user.me);
  const messages = currentChatroom.chats;
  const messageContainerRef = useRef(); // Message Container 영역을 가르키기 위해 useRef() 사용

  const handleCurrentMessageInputChange = (event: any) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = (event: any) => {
    event.preventDefault();

    // 메세지 내용 없이 전송하려 하면 alert
    if (currentMessage === '') {
      alert('메시지를 입력하세요!');
      return;
    }

    updateChatroomList({
      friendId: parseInt(friendId),
      chats: [
        ...currentChatroom.chats,
        { senderId: currentSendingUser.id, message: currentMessage },
      ],
    });

    setCurrentMessage(''); // input form을 비운다.
  };

  const handleHeaderClick = () => {
    if (currentSendingUser.id === 0) {
      setCurrentSendingUser(user.you);
    } else {
      setCurrentSendingUser(user.me);
    }
  };

  useEffect(() => {
    // messageContainerRef?.current?.scrollBy(0, 1000);
  }, [messages]);

  return (
    <Fragment>
      <GlobalStyle />
      <MessengerContainer>
        <Header
          onHeaderClick={handleHeaderClick}
          currentUser={currentSendingUser}
        />

        <MessageContainer>
          {messages.map((message) => {
            return (
              <Message
                messageSender={getSingleFriend(message.senderId)}
                messageContent={message.message}
              />
            );
          })}
        </MessageContainer>

        <MessageForm
          currentMessage={currentMessage}
          onCurrentMessageInputChange={handleCurrentMessageInputChange}
          onSendMessage={handleSendMessage}
        />
      </MessengerContainer>
    </Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  display: flex;
  body {
    margin: 0;
  }
`;

const MessengerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;
  box-shadow: 5px 5px 20px 3px rgba(0, 0, 0, 0.25);
`;

const MessageContainer = styled.div`
  height: calc(95vh - 170px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 10px;
  background-color: rgba(33, 33, 33, 0.05);
`;

export default Chatroom;
