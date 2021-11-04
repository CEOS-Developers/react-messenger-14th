import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import user from '../data/user';
function Settings() {
  const currentUser = user[0];
  return (
    <Container>
      <TopBar current="settings" />
      <Wrapper>
        <Img src={process.env.PUBLIC_URL + '/img/' + currentUser.profileImg} />
        <Name>{currentUser.name}</Name>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100px;
`;
const Name = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Settings;
