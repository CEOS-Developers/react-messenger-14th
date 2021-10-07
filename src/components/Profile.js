import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import user from '../data/user';
function Profile({ currentUser, handleChangeUser }) {
  return (
    <ProfileWrapper onClick={handleChangeUser}>
      <ProfileImg
        src={process.env.PUBLIC_URL + '/img/' + user[currentUser].profileImg}
      />
      <NameWrapper>
        <Name>{user[currentUser].name}</Name>
        <Status>{user[currentUser].status}</Status>
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
