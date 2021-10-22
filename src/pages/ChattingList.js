import React from 'react';
import styled from 'styled-components';
import user from '../data/user';
import savedChat from '../data/savedChat';
function ChattingList() {
  console.log(savedChat);
  return (
    <div>
      {savedChat.map((chats) => {
        const lenChat = chats.chat.length;
        return (
          <Wrapper>
            <Img
              src={
                process.env.PUBLIC_URL + '/img/' + user[chats.userId].profileImg
              }
            />
            <Name>{user[chats.userId].name}</Name>
            <div>{chats.chat[lenChat - 1].text}</div>
          </Wrapper>
        );
      })}
    </div>
  );
}
const Wrapper = styled.div`
  display: flex;
  height: 15vh;
  align-items: center;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  border: 1px solid lightgray;
`;
const Name = styled.div`
  font-weight: bold;
`;

export default ChattingList;
