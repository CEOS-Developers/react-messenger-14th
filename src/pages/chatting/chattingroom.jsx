import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';
import { StyledImg } from '../friends/friendsListItem';
import { UserName, UserInfo } from '../friends/friendsListItem';
import ChattingItem from './chattingItem';

const Chattingroom = ({ users }) => {
  const [friendData, setFriendData] = useState({});
  const [myData, setMyData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setFriendData(
      ...users.filter((e) => {
        return e['id'] === parseInt(id);
      })
    );

    setMyData(
      ...users.filter((e) => {
        return e['id'] === 0;
      })
    );
  }, [users]);

  return (
    <ChattingRoomContainer>
      {/* 로컬 주소로 하면 왜 안될까.. */}
      <Button>
        <StyledImg src={friendData?.profilePicture} alt="프로필 사진" />
        <UserInfo>
          <UserName>{friendData?.name}</UserName>
        </UserInfo>
      </Button>
      <Main>
        {friendData?.dialogue?.map((element) => (
          <>
            <ChattingItem
              textMessage={element}
              myData={myData}
              friendData={friendData}
            ></ChattingItem>
          </>
        ))}
        <div>{id}번 방입니다.</div>
      </Main>
      <Form>
        <StyledTextArea></StyledTextArea>
        <SubmitButton>전송</SubmitButton>
      </Form>
    </ChattingRoomContainer>
  );
};

export default Chattingroom;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: #acbacc;
  width: 100%;
  height: 15vh;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Main = styled.main`
  background-color: #c2d1e5;
  width: 100%;
  height: 65vh;
`;

const Form = styled.form`
  height: 20vh;
  display: flex;
  border: none;
`;

const StyledTextArea = styled.textarea`
  margin-left: 10px;
  width: 90%;
  height: 80%;
  font-size: 5vh;
  word-wrap: break-word;
  word-break: break-all;
  padding: 5px;
  border: none;
  resize: none;
  outline: none;
  box-shadow: none;
`;

const ChattingRoomContainer = styled.div`
  height: 100vh;
`;

const SubmitButton = styled.button`
  width: 15vh;
  height: 8vh;
  margin: 1vh;
  font-size: 3vh;
  background-color: yellow;
  border-radius: 5%;
  overflow: hidden;
  border-color: #d1d100;
`;

const Dialogue = styled.div``;
