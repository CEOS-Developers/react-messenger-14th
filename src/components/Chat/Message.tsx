import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import user from '../../data/user.json';
function Message({ chatList }: { chatList: any }) {
  const messageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messageRef.current)
      messageRef.current.scrollTo(0, messageRef.current.scrollHeight);
  }, [chatList]);
  return (
    <Wrapper ref={messageRef}>
      {chatList.map((message: any) => (
        <MessageContainer key={message.chatId} sender={message.userId}>
          <Img
            src={
              process.env.PUBLIC_URL + '/img/' + user[message.userId].profileImg
            }
          ></Img>
          <MessageContent sender={message.userId}>
            {message.text}
          </MessageContent>
        </MessageContainer>
      ))}
    </Wrapper>
  );
}
interface ISender {
  sender: boolean;
}
const Wrapper = styled.div`
  flex: 1;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 300px;
`;
const MessageContainer = styled.div<ISender>`
  display: flex;
  flex-direction: ${(props) => (!props.sender ? 'row-reverse' : 'row')};
  align-items: flex-end;
  margin-bottom: 10px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  border: 1px solid lightgray;
`;
const MessageContent = styled.div<ISender>`
  display: flex;
  align-items: center;
  height: fit-content;
  box-shadow: 2px 5px 5px -5px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 10px;
  background: ${(props) => (!props.sender ? '#ffe990' : '#ffffff')};
  margin: 5px;
`;
export default Message;
