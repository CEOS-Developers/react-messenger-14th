import React from 'react';
import styled from 'styled-components';

const ChattingItem = ({ textMessage, myData, friendData }) => {
  const profilePictureSrc = textMessage.isMyDialogue
    ? myData.profilePicture
    : friendData.profilePicture;

  console.log(textMessage);
  return (
    <ChattingItemContainer textMessage={textMessage}>
      <ProfilePicture src={profilePictureSrc}></ProfilePicture>
      <TextMessageContainer>{textMessage.content}</TextMessageContainer>
      <TimeContainer>{textMessage.time}</TimeContainer>
    </ChattingItemContainer>
  );
};

export default ChattingItem;

const ChattingItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2vh;
  flex-direction: ${({ textMessage }) => {
    return textMessage.isMyDialogue ? 'row-reverse' : 'row';
  }};
`;
const ProfilePicture = styled.img`
  width: 8vh;
  height: 8vh;
  border-radius: 35%;
`;
const TextMessageContainer = styled.div`
  background-color: white;
  margin: 0 2vh;
  padding: 10px;
  border-radius: 10px;
`;
const TimeContainer = styled.div`
  font-size: 10px;

  display: flex;
  align-items: bottom;
  height: 100%;

  align-self: flex-end;
`;
