import React from 'react';
import styled from 'styled-components';
import user from './user'


function Chatcontent({chatList}) {
  return (
    <>
      {chatList.map((message, i) => (
  
        <MessageContainer sender={message.user}>
          <Img
            src={
              process.env.PUBLIC_URL + '/assets/' + user[message.user].profileImg
            }
          ></Img>
          <MessageContent key={i}>{message.text}</MessageContent>
        </MessageContainer>
      ))}
    </>
  );
}
const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.sender === 0 ? 'row-reverse' : 'row')};
  align-items: flex-end;
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
  height: fit-content;
  border-radius: 30%;

`;

export default Chatcontent;