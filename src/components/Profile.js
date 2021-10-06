import React from 'react';
import styled from 'styled-components';
import profile from '../img/profile.jpeg';
function Profile() {
  return (
    <ProfileWrapper>
      <ProfileImg src={profile} />
      <NameWrapper>
        <div>이름</div>
        <div>상태메시지</div>
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
