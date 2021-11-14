import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useChatRoomContext from '../../@shared/hooks/useChatRoom';
import useUserContext from '../../@shared/hooks/useUser';

const checkIsLastMessage = ({
  idx,
  arrSize,
}: {
  idx: number;
  arrSize: number;
}) => {
  if (idx === arrSize) return true;
  return false;
};

const ChatRoomMessages = () => {
  const { getUsers, getCurrentUser } = useUserContext();
  const users = getUsers();
  const currentUser = getCurrentUser();

  const { getMessages } = useChatRoomContext();
  const messages = getMessages();

  const lastMesseageRef: React.MutableRefObject<any> = useRef(null);

  useEffect(() => {
    // document
    //   .querySelector('.messages-list')
    //   .lastChild?.scrollIntoView({ behavior: 'smooth' });
    lastMesseageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderMessages = () =>
    messages?.map((message, idx, thisArr) => {
      if (message.userID === currentUser.id) {
        if (checkIsLastMessage({ idx: idx, arrSize: thisArr.length - 1 })) {
          return (
            <RightMessageItem ref={lastMesseageRef}>
              <ProfileImg src={currentUser.img} />
              <TextContainer>
                <RightUserName>{currentUser.name}</RightUserName>
                <RightUserMessageText>{message.content}</RightUserMessageText>
              </TextContainer>
            </RightMessageItem>
          );
        }
        return (
          <RightMessageItem>
            <ProfileImg src={currentUser.img} />
            <TextContainer>
              <RightUserName>{currentUser.name}</RightUserName>
              <RightUserMessageText>{message.content}</RightUserMessageText>
            </TextContainer>
          </RightMessageItem>
        );
      }

      const leftUser = users.find((user) => user.id === message.userID);
      return (
        <LeftMessageItem>
          <ProfileImg src={leftUser?.img} />
          <TextContainer>
            <LeftUserName>{leftUser?.name}</LeftUserName>
            <LeftUserMessageText>{message.content}</LeftUserMessageText>
          </TextContainer>
        </LeftMessageItem>
      );
    });

  return (
    <MessagesContainer>
      <MessagesList className="messages-list">{renderMessages()}</MessagesList>
    </MessagesContainer>
  );
};

const MessagesContainer = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const MessagesList = styled.ul`
  padding: 0px;
  margin: 1rem;
`;

const RightMessageItem = styled.li`
  all: unset;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const LeftMessageItem = styled.li`
  all: unset;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  align-self: flex-start;

  padding: 10px;

  border-radius: 50%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightUserName = styled.p`
  display: table;

  padding: 0px;
  margin: 1rem 0 0 0;

  font-size: 15px;

  text-align: right;
`;

const LeftUserName = styled.p`
  display: table;

  padding: 0px;
  margin: 1rem 0 0 0;

  font-size: 15px;
`;

const RightUserMessageText = styled.p`
  display: table;

  padding: 1rem;
  margin: 1rem 0 0 0;

  border-radius: 40px;
  border-style: solid;
  border-width: thin;
  border-color: #22c1c3;

  background: white;

  font-size: 18px;
`;

const LeftUserMessageText = styled.p`
  display: table;

  padding: 1rem;
  margin: 1rem 0 0 0;

  border-radius: 40px;
  border-style: solid;
  border-width: thin;
  border-color: #fdbb2d;

  background: white;

  font-size: 18px;
`;

export default ChatRoomMessages;
