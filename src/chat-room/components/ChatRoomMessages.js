import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useUsers } from '../../@shared/hooks/useUser';

const ChatRoomMessages = ({ messages, currentUser }) => {
  const { users } = useUsers();

  useEffect(() => {
    document
      .querySelector('#messages-list')
      .lastChild?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderMessages = () =>
    messages.map((message) => {
      if (message.userID === currentUser.id) {
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
          <ProfileImg src={leftUser.img} />
          <TextContainer>
            <LeftUserName>{leftUser.name}</LeftUserName>
            <LeftUserMessageText>{message.content}</LeftUserMessageText>
          </TextContainer>
        </LeftMessageItem>
      );
    });

  return (
    <MessagesContainer>
      <MessagesList id="messages-list">{renderMessages()}</MessagesList>
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
