import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import user from '../data/user';
function Message({ chatList }) {
  const messageRef = useRef();
  useEffect(() => {
    if (messageRef.current)
      messageRef.current.scrollTo(0, messageRef.current.scrollHeight);
  }, [chatList]);
  return (
    <Wrapper ref={messageRef}>
      {chatList.map((message, i) => (
        <MessageContainer sender={message.user}>
          <Img
            src={
              process.env.PUBLIC_URL + '/img/' + user[message.user].profileImg
            }
          ></Img>
          <MessageContent key={i} sender={message.user}>
            {message.text}
          </MessageContent>
        </MessageContainer>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex: 1;
  overflow: auto hidden;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.sender === 0 ? 'row-reverse' : 'row')};
  align-items: flex-end;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  border: 1px solid lightgray;
`;
const MessageContent = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 10px;
  background: ${(props) => (props.sender === 0 ? '#ffe990' : '#ffffff')};
  margin: 5px;
`;
export default Message;
