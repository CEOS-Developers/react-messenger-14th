import React from 'react';
import styled from 'styled-components';
function ChatInput() {
  return (
    <InputBox>
      <Input placeholder="메시지 전송하기" />
      <Button>전송</Button>
    </InputBox>
  );
}
const InputBox = styled.div`
  width: 100%;
  bottom: 0;
  position: absolute;
`;
const Input = styled.input`
  width: 80%;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-right: 10px;
  padding-left: 10px;
  text-align: left;
`;
const Button = styled.button`
  height: 30px;
  background-color: #ffe990;
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;
`;
export default ChatInput;
