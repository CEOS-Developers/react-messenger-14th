import React from 'react';
import styled from 'styled-components';
import user from '../data/user';

interface ProfileProps{
currentUser: any;
handleChangeUser: any;
}



export function Profile({ currentUser, handleChangeUser }: ProfileProps) {
  return (
    <Wrap onClick={handleChangeUser}>
      <ProfileImg
        src={process.env.PUBLIC_URL + '/assets/' + user[currentUser].profileImg}
      />
      <NameWrapper>
        <div>{user[currentUser].name}</div>
        <div>{user[currentUser].profileMessage}</div>
      </NameWrapper>
    </Wrap>
  );
}
const Wrap = styled.div`
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