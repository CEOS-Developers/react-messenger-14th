import React from 'react';
import Header from '../@shared/components/Header';
import Main from '../@shared/components/Main';
import styled from 'styled-components';
import { defaultProfileImg } from '../@shared/contexts/user';
import useUserContext from '../@shared/hooks/useUser';

const Setting = () => {
  const { getCurrentUser } = useUserContext();
  const currentUser = getCurrentUser();

  return (
    <Wrapper>
      <Header />
      <Main style={{ alignItems: 'center' }}>
        <SettingWrapper>
          <Profile>
            <Img src={defaultProfileImg} />
          </Profile>
          <Name>{currentUser.name}</Name>
        </SettingWrapper>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingWrapper = styled.div`
  all: unset;

  width: 360px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 20px;

  border-radius: 30px;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
`;

const Profile = styled.div`
  all: unset;

  border-radius: 50px;
`;

const Img = styled.img`
  all: unset;

  width: 100px;
  height: 100px;

  border-radius: 50px;
`;

const Name = styled.span`
  all: unset;

  display: inline-block;
`;

export default Setting;
