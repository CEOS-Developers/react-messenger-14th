import React from 'react';
import styled from 'styled-components';

const ChatRoomMessageForm = () => {
  return (
    <MessageFormContainer>
      <MessageForm>
        <MessageInput
          type="text"
          placeholder="메세지를 입력해주세요"
        ></MessageInput>
        <MessageBtn type="submit">전송</MessageBtn>
      </MessageForm>
    </MessageFormContainer>
  );
};

const MessageFormContainer = styled.footer`
  height: 5%;

  margin: 0;
  padding: 0.6rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageForm = styled.form`
  height: 90%;
  width: 100%;

  display: flex;
  justify-content: space-around;
`;

const MessageInput = styled.input`
  all: unset;

  width: 80%;

  margin: 0;
  padding-left: 0.4rem;
`;

const MessageBtn = styled.button`
  all: unset;

  font-weight: bold;
  font-size: 0.8rem;
`;

export default ChatRoomMessageForm;
