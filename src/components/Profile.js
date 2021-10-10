import React from 'react';
import styled from 'styled-components';
import user from '../data/user';
function Profile({ currentUser, setCurrentUser }) {
  const handleChangeUser = () => {
    currentUser ? setCurrentUser(0) : setCurrentUser(1);
  };
  const { profileImg, name, status } = user[currentUser];
  return (
    <ProfileWrapper onClick={handleChangeUser}>
      <ProfileImg src={process.env.PUBLIC_URL + '/img/' + profileImg} />
      <NameWrapper>
        <Name>{name}</Name>
        <Status>{status}</Status>
      </NameWrapper>
    </ProfileWrapper>
  );
}
const ProfileWrapper = styled.div`
  display: flex;
  height: 15vh;
  align-items: center;
  margin-left: 20px;
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  border: 1px solid lightgray;
`;
const NameWrapper = styled.div`
  line-height: 25px;
  margin-left: 10px;
`;
const Name = styled.div`
  font-weight: bold;
`;
const Status = styled.div``;
export default Profile;
