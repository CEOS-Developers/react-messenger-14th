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
  border: 1px solid lightgray;
`;
const NameWrapper = styled.div``;
export default Profile;
