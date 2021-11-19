import React, { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IChatList } from '../../pages/ChatRoom';
function ChatInput({
  currentUser,
  chatList,
  setChatList,
}: {
  currentUser: number;
  chatList: IChatList[];
  setChatList: Dispatch<SetStateAction<IChatList[]>>;
}) {
  const [message, setMessage] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleSendMessageSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    if (message)
      setChatList([
        ...chatList,
        {
          chatId: chatList.length,
          text: message,
          userId: currentUser,
        },
      ]);
    else {
      alert('내용을 입력하세요');
    }
    setMessage('');
  };
  return (
    <InputForm onSubmit={handleSendMessageSubmit}>
      <Input
        placeholder="메시지 전송하기"
        onChange={handleInputChange}
        value={message}
      />
      <Button type="submit">전송</Button>
    </InputForm>
  );
}
const InputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
const Input = styled.input`
  height: 50px;
  width: 70%;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-right: 10px;
  padding-left: 10px;
  text-align: left;
  font-family: 'Goyang';
`;
const Button = styled.button`
  height: 30px;
  background-color: #ffe990;
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Goyang';
`;
export default ChatInput;
