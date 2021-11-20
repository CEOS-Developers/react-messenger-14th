import React, { useState, Fragment, useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MessageForm from './form.js';
import Header from './header.js';
import Message from './message.js';
import FriendList from '../data/Friends.json';
import { useParams } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';
import useChatroomContext from '../hooks/useChatroomContext';

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

function Chatroom() {
  const { friendId } = useParams<{ friendId: string }>();
  const { getSingleFriend } = useUserContext();
  const {
    getChatroomList,
    setCurrentChatroom,
    getCurrentChatroom,
    updateChatroomList,
    getMessages,
    postMessage,
  } = useChatroomContext();
  // 채팅방의 parameter로 받은 id는 곧 친구의 id이다.
  const currentFriend = getSingleFriend(parseInt(friendId));
  const currentChatroom = getCurrentChatroom(friendId);
  useEffect(() => {
    setCurrentChatroom(parseInt(friendId));
  }, []);

  // /* chatroomContext는 모든 대화 정보를 담고 있는데,
  // 이를 props로 받았기 때문에 현재 대화중인 친구와의 채팅 목록만 따로 state로 선언  */
  // const [currentChatList, setCurrentChatList] = useState(
  //   getCurrentChatroom(friendId)
  // );

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

  /* 채팅방에 들어갈 때, 전에 주고 받았던 채팅 목록들을 미리 불러와 렌더링 해놓는다. */
  // const previousChatList = currentChatroom.chats.map((item) => {
  //   return (
  //     <Message
  //       messageContent={item.message}
  //       messageSender={item.senderId === 0 ? user.me : user.you}
  //     />
  //   );
  // });

  const [currentMessage, setCurrentMessage] = useState('');
  // const [messages, setMessages] = useState(previousChatList);
  const messages = currentChatroom.chats;

  const [currentSendingUser, setCurrentSendingUser] = useState(user.me);
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

    // const newMessage = (
    //   <Message
    //     messageContent={currentMessage}
    //     messageSender={currentSendingUser}
    //   />
    // );
    updateChatroomList({
      friendId: parseInt(friendId),
      chats: [
        ...currentChatroom.chats,
        { senderId: currentSendingUser.id, message: currentMessage },
      ],
    });
    // messages를 이미 받아와버려서 업데이트가 되지 않는다 어떻게 메세지를 불러올지 생각해보자
    setCurrentMessage(''); // input form을 비운다.

    // const modifiedChatList = currentChatList;

    // /* 메세지가 추가될 때 마다 위에서 선언한 currentChatList에 방금 보낸 메세지를 추가한다.  */
    // modifiedChatList.chats.push({
    //   senderId: currentSendingUser.id,
    //   message: currentMessage,
    // });

    // setCurrentChatList(modifiedChatList);
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

  /* 채팅방을 나갈 때 마다, 주고받았던 채팅이 저장된 state를
  Chats.json파일에 업데이트한다. 이와 동시에 채팅방 목록에서 마지막 메세지 미리보기가 갱신된다. */
  // useEffect(() => {
  //   return () => {
  //     // useEffect의 cleanup 함수에 무언가 dispatch하는 동작을 넣으면 안된다
  //     // 생각해 보면 당연한데,,, 컴포넌트가 언마운트 된 다음에 상태를 바꾸려고 하니 안되는것
  //     // 근데 context인데도 안된다고?
  //     // updateChatroomList(currentChatroom);
  //   };
  // }, []);

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
          messageSender={currentSendingUser}
          onCurrentMessageInputChange={handleCurrentMessageInputChange}
          onSendMessage={handleSendMessage}
        />
      </MessengerContainer>
    </Fragment>
  );
}

export default Chatroom;
