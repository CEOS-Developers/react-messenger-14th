import React from 'react';
import styled from 'styled-components';
import useChatRoomContext from '../../@shared/hooks/useChatRoom';
import useUserContext from '../../@shared/hooks/useUser';
import ChatRoomItem from './ChatRoomItem';

const ChatRoomList = () => {
  const { getChatRooms } = useChatRoomContext();
  const { getCurrentUser } = useUserContext();

  const currentUser = getCurrentUser();
  const chatRooms = getChatRooms();

  const myChatRooms = chatRooms.map((chatRoom) =>
    chatRoom.users.includes(currentUser.id) ? chatRoom : undefined
  );

  return (
    <Wrapper>
      {myChatRooms.map((chatRoom) => (
        <ChatRoomItem chatRoom={chatRoom} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export default ChatRoomList;
