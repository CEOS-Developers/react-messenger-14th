import React from 'react';
import styled, { css } from 'styled-components';
import user from '../data/user';
function message({ chatList }) {
  return (
    <>
      {chatList.map((message, i) => (
        <MessageContainer sender={message.user}>
          <Img
            src={
              process.env.PUBLIC_URL + '/img/' + user[message.user].profileImg
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
  height: fit-content;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 10px;
`;
export default message;
