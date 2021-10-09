import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import ChatContent from './ChatContent';
import InputMessage from './InputMessage';

function chatting() {
  return (
    <Wrapper>
      <Profile />
      <ChatContent />
      <InputMessage></InputMessage>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default chatting;