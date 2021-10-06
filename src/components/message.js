import React from 'react';
import styled from 'styled-components';
import friendimg from '../img/ryan.png';
function message() {
  return (
    <MessageContainer>
      <Img src={friendimg} />
      <MessageContent>dd</MessageContent>
    </MessageContainer>
  );
}
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  overflow: hidden;
`;
const MessageContent = styled.div`
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 10px;
`;
export default message;
