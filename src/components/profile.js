import React from 'react';
import styled from 'styled-components';
import muziImage from '../assets/muzi.PNG';
function Profile() {
  return (
    <Wrapper>
      <ProfileImg src={muziImage} />
      <NameWrapper>
        <div>my name</div>
        <div>my profile messsge</div>
      </NameWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  height: 12vh;
  align-items: center;
  border: 1px;
  background: yellow;
  margin-bottom: 50px;
`;
const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 30%;
`;
const NameWrapper = styled.div``;
export default Profile;