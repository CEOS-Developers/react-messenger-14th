import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useUserContext from '../../@shared/hooks/useUser';
import { UserI } from '../contexts/user';
import useChatRoom from '../hooks/useChatRoom';
import { color } from '../style/color';

const Header = () => {
  const { pathname } = useLocation();

  const { id } = useParams<{ id: string | undefined }>();
  const { getUsers, getCurrentUser, setCurrentUser } = useUserContext();
  const { getCurrentChatRoom } = useChatRoom();
  const currentChatroom = getCurrentChatRoom();
  const currentUser = getCurrentUser();

  const users =
    pathname.includes('/chat-rooms') && id
      ? getUsers().filter((user: UserI) =>
          currentChatroom?.users.includes(user.id)
        )
      : getUsers();

  const handleChangeProfile = (e: React.ChangeEvent<any>) => {
    const selectedIdx = e.target.options.selectedIndex;

    if (selectedIdx === 0) {
      return;
    }

    const id = e.target[selectedIdx].id;

    const newCurrentUser = users.find(
      (user: any) => Number(user.id) === Number(id)
    );

    setCurrentUser(newCurrentUser);
  };

  return (
    <ProfileHeader>
      <ProfileImg src={currentUser.img} />
      <ProfileTextContainer>
        <ProfileText>{currentUser.name}</ProfileText>
        <SelectProfile onChange={handleChangeProfile}>
          <ProfileOption selected>프로필 바꾸기</ProfileOption>
          {users.map((user: any) => (
            <ProfileOption id={user.id} value={user}>
              {user.name}
            </ProfileOption>
          ))}
        </SelectProfile>
      </ProfileTextContainer>
    </ProfileHeader>
  );
};

const ProfileHeader = styled.header`
  width: 100%;
  height: 15%;

  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 30px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  background: white;
`;

export const ProfileImg = styled.img`
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

export const SelectProfile = styled.select`
  padding: 8px;
  margin: 0;

  border-color: ${color.selectMenuGreen};
  border-radius: 30px;

  background-color: white;
`;

const ProfileOption = styled.option``;

export default Header;
