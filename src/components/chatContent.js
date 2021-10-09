import React from 'react';
import styled from 'styled-components';
import counterImage from '../assets/corn.PNG';
function chatContent({chatList}) {
  return (
    <MessageContainer>
      <Img src={counterImage} />
      <MessageContent>counterpart text message</MessageContent>
      {chatList.map((message, i) => (
        <MessageContent key={i}>{message.text}</MessageContent>
      ))}
    </MessageContainer>
  );
}
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 30%;

`;

export default chatContent;