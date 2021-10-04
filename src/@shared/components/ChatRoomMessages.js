import React from 'react';
import styled from 'styled-components';

const ChatRoomMessages = () => {
  return (
    <MessagesContainer>
      <MessagesList>
        <SentMessageItem>
          <ProfileImg src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" />
          <MessageText>hi</MessageText>
        </SentMessageItem>
      </MessagesList>
    </MessagesContainer>
  );
};

const MessagesContainer = styled.main`
  width: 100%;
  height: 80%;
`;

const MessagesList = styled.ul`
  padding: 0px;
`;

const SentMessageItem = styled.li`
  all: unset;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReceivedMessageItem = styled.li`
  all: unset;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  padding: 10px;

  border-radius: 50%;
`;

const MessageText = styled.p`
  display: table;

  padding: 1rem;

  border-radius: 40px;
  border-style: solid;
  border-width: thin;
  border-color: rgb(214, 214, 214);

  background: white;

  font-size: 15px;
`;

export default ChatRoomMessages;
