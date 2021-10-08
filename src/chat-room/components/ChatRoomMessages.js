import React from 'react';
import styled from 'styled-components';
import { useCurrentUser } from '../../@shared/hooks/useUser';
import {
  useChatRoomMessages,
  useCurrentChatRoom,
} from '../../@shared/hooks/useChatRoom';

const ChatRoomMessages = () => {
  const { currentChatRoom } = useCurrentChatRoom();
  const { chatRoomMessages } = useChatRoomMessages();
  const { currentUser } = useCurrentUser();

  return (
    <MessagesContainer>
      <MessagesList>
        <RightMessageItem>
          <ProfileImg src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
          <TextContainer>
            <RightUserName>양기욱</RightUserName>
            <RightUserMessageText>lorem ipsum lorem</RightUserMessageText>
          </TextContainer>
        </RightMessageItem>
      </MessagesList>
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
