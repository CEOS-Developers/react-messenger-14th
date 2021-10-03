import React from 'react';
import styled from 'styled-components';

const CoupleChatRoomHeader = () => {
  return (
    <Header>
      <ProfileImg src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" />
      <ProfileTextContainer>
        <ProfileText>양기욱</ProfileText>
        <ProfileText>active</ProfileText>
      </ProfileTextContainer>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
  align-items: center;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  padding: 10px;

  border-radius: 50%;
`;

const ProfileTextContainer = styled.address`
  padding: 5px 10px;
  margin: 0px;
`;

const ProfileText = styled.p`
  margin: 0px;
  padding: 10px;
`;

export default CoupleChatRoomHeader;
