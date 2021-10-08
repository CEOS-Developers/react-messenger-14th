import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useCurrentUser, useUsers } from '../hooks/useUser';

const Header = () => {
  const { currentUser, handleChangeCurrentUser } = useCurrentUser();
  const { users } = useUsers();

  const handleChangeProfile = (e) => {
    const selectedIdx = e.target.options.selectedIndex;

    if (selectedIdx === 0) {
      return;
    }

    const id = e.target[selectedIdx].id;

    const currentUser = users.find((user) => Number(user.id) === Number(id));

    handleChangeCurrentUser(currentUser);
  };

  return (
    <ProfileHeader>
      <ProfileImg src={currentUser.img} />
      <ProfileTextContainer>
        <ProfileText>{currentUser.name}</ProfileText>
        <ChangeProfile onChange={handleChangeProfile}>
          <ProfileOption selected>프로필 바꾸기</ProfileOption>
          {users.map((user) => (
            <ProfileOption id={user.id} value={user}>
              {user.name}
            </ProfileOption>
          ))}
        </ChangeProfile>
      </ProfileTextContainer>
    </ProfileHeader>
  );
};

const ProfileHeader = styled.header`
  width: 100%;
  height: 10%;

  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 30px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  background: white;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  padding: 10px;
  margin: 1rem;

  border-radius: 50%;
`;

const ProfileTextContainer = styled.address`
  padding: 5px 10px;
  margin: 0px;

  font-style: normal;
`;

const ProfileText = styled.p`
  padding: 10px;
  margin: 0px;
`;

const ChangeProfile = styled.select`
  padding: 8px;
  margin: 0;

  border-color: #a1be6c;
  border-radius: 30px;

  background-color: white;
`;

const ProfileOption = styled.option``;

export default Header;
