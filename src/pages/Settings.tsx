import styled from 'styled-components';
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineAliwangwang,
  AiOutlineCopyrightCircle,
  AiOutlineGithub,
  AiOutlineInfoCircle,
} from 'react-icons/ai';
import TopBar from '../components/TopBar';
import user from '../data/user.json';
import { BodyContainer } from '../components/Styles';
function Settings() {
  const currentUser = user[0];
  return (
    <BodyContainer>
      <TopBar current="settings" onSearchButtonClicked />
      <Wrapper>
        <Img src={process.env.PUBLIC_URL + '/img/' + currentUser.profileImg} />
        <Name>{currentUser.name}</Name>
      </Wrapper>
      <MenuWrapper>
        <IconWrapper>
          <AiOutlineMail size={30} /> 메일
        </IconWrapper>
        <IconWrapper>
          <AiOutlineCalendar size={30} /> 캘린더
        </IconWrapper>
        <IconWrapper>
          <AiOutlineAliwangwang size={30} /> 이모티콘
        </IconWrapper>
        <IconWrapper>
          <AiOutlineCopyrightCircle size={30} /> 태은
        </IconWrapper>
        <a href="https://github.com/xodms0309">
          <IconWrapper>
            <AiOutlineGithub size={30} /> 깃허브
          </IconWrapper>
        </a>
        <IconWrapper>
          <AiOutlineInfoCircle size={30} /> 공지사항
        </IconWrapper>
      </MenuWrapper>
    </BodyContainer>
  );
}
const Img = styled.img`
  width: 100px;
`;
const Name = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  justify-items: center;
  margin-top: 20px;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Settings;
