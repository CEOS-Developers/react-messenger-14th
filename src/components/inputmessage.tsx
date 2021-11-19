import React, {useState}from 'react';
import styled from 'styled-components';

interface MessageProps{
  chatList:any;
  setChatList: any;
  currentUser: string;
}



function Inputmessage({ chatList, setChatList, currentUser }: MessageProps) {
  const [message, setMessage] = useState('');
  const handleInputChange = (e: React.ChangeEvent<any>) => {
    setMessage(e.target.value);
  };
  const onClickSendMessage = () => {
    if (message)
      setChatList((previousChat: any) => [
        ...previousChat,
        {
          text: message,
          user: currentUser,
        },
      ]);
    setMessage('');
  };
  return (
    <InputBox>

      <Input
        placeholder="문구를 입력해주세요.."
        onChange={handleInputChange}
        value={message}
      />
      <Button onClick={onClickSendMessage}>전송하기</Button>
    </InputBox>
  );
}
const InputBox = styled.div`
  width: 40%;
  bottom: 13%;
  position: absolute;
`;
const Input = styled.input`
  width: 75%;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-left: 10px;
  margin-bottom:90px;
  margin-right: 10px;
  text-align: left;
`;
const Button = styled.button`
  height: 40px;
  background-color: black;
  text-align: center;
  color: white;
  border: none;
`;
export default Inputmessage