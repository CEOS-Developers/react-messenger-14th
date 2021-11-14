import React, { useState } from 'react';
import styled from 'styled-components';
import { POPUP_TIME, popup } from '../../@shared/style/animation';
import CreateChatRoomModal from './CreateChatRoomModal';

interface CreateChatRoomI extends React.HTMLAttributes<HTMLElement> {
  isModalOpen: boolean;
}

const CreateChatRoom = ({
  onClick,
  isModalOpen,
  ...props
}: CreateChatRoomI) => {
  return (
    <Wrapper onClick={onClick}>
      <i className="fas fa-comment-medical"></i>
      {isModalOpen && <CreateChatRoomModal onClick={onClick} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  all: unset;

  position: relative;
  /* bottom: 10px; */
  top: 10px;
  left: 10px;

  width: 3.5rem;
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  font-size: 1.8rem;
  opacity: 60%;

  &:hover {
    animation: ${popup} ${POPUP_TIME};
  }
`;

export default CreateChatRoom;
