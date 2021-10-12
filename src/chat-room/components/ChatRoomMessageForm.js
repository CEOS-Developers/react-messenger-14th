import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import useUserContext from '../../@shared/hooks/useUser';
import useChatRoomContext from '../../@shared/hooks/useChatRoom';

const ChatRoomMessageForm = () => {
  const { getCurrentUser } = useUserContext();
  const { postMessage } = useChatRoomContext();
  const currentUser = getCurrentUser();

  const handlePostMessage = (e) => {
    e.preventDefault();

    if (e.target[0].value === '') {
      window.alert('내용을 입력해주세요');
      return;
    }
    const newMessage = {
      content: e.target[0].value,
      userID: currentUser.id,
    };
    postMessage(newMessage);
    e.target[0].value = '';
  };

  return (
    <MessageFormContainer>
      <MessageForm onSubmit={handlePostMessage}>
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
  border-radius: 30px;

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

  font-size: 1rem;
`;

const MessageBtn = styled.button`
  all: unset;

  font-weight: bold;
  font-size: 1rem;
`;

export default ChatRoomMessageForm;
