import React, { useState } from 'react';
import Header from '../@shared/components/Header';
import Main from '../@shared/components/Main';
import CreateChatRoom from './components/CreateChatRoom';
import ChatRoomList from './components/ChatRoomList';
import styled from 'styled-components';

const ChatRooms = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSetModal = (e: React.MouseEvent<any>) => {
    const clickedClassName = (e.target as Element).className;

    if (clickedClassName.includes('close-modal')) {
      setIsModalOpen(false);
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      <Header />
      <Main>
        <CreateChatRoom isModalOpen={isModalOpen} onClick={handleSetModal} />
        <ChatRoomList />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ChatRooms;
