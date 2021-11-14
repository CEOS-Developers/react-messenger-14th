import React from 'react';
import styled, { keyframes } from 'styled-components';
import { POPUP_TIME, popup } from '../../@shared/style/animation';
import { color } from '../../@shared/style/color';

const CreateChatRoom = () => {
  return (
    <Wrapper>
      <i className="fas fa-comment-medical"></i>
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
