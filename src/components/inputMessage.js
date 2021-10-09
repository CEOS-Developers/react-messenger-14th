import React from 'react';
import styled from 'styled-components';
function inputMessage() {
  return (
    <InputBox>
      <Input placeholder="문구를 입력해주세요.."/>
      <Button>전송하기</Button>
    </InputBox>
  );
}
const InputBox = styled.div`
  width: 100%;
  bottom: 0;
  position: absolute;
`;
const Input = styled.input`
  width: 85%;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-left: 10px;
  margin-bottom: 20px;
  text-align: left;
`;
const Button = styled.button`
  height: 40px;
  background-color: black;
  text-align: center;
  color: white;
  border: none;
`;
export default inputMessage