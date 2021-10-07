import React, { useState } from 'react';
import styled from 'styled-components';
import user from '../data/user';
function Profile() {
  const [currentUser, setCurrentUser] = useState(0);
  const handleChangeUser = () => {
    currentUser ? setCurrentUser(0) : setCurrentUser(1);
  };
  return (
    <ProfileWrapper onClick={handleChangeUser}>
      <ProfileImg
        src={process.env.PUBLIC_URL + '/img/' + user[currentUser].profileImg}
      />
      <NameWrapper>
        <div>{user[currentUser].name}</div>
        <div>{user[currentUser].status}</div>
      </NameWrapper>
    </ProfileWrapper>
  );
}
const ProfileWrapper = styled.div`
  display: flex;
  height: 15vh;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  overflow: hidden;
`;
const NameWrapper = styled.div``;
export default Profile;
