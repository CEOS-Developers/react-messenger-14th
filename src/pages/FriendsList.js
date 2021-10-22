import React from 'react';
import styled from 'styled-components';
import users from '../data/user';
import TopBar from '../components/TopBar';
function FriendsList() {
  return (
    <Container>
      <TopBar />
      {users.map((user) => (
        <Wrapper>
          <Img src={process.env.PUBLIC_URL + '/img/' + user.profileImg}></Img>
          <NameWrapper>
            <Name>{user.name}</Name>
            <Status>{user.status}</Status>
          </NameWrapper>
        </Wrapper>
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;
const NameWrapper = styled.div`
  line-height: 25px;
  margin-left: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  margin-left: 20px;
`;
const Name = styled.p`
  font-weight: bold;
  margin: 0;
`;
const Status = styled.p`
  margin: 0;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  border: 1px solid lightgray;
`;
export default FriendsList;
