import styled from "styled-components";
import GlobalStyle from "../Asset/GlobalStyle";
import palette from "../styles/palette";
import TopBar from "../Components/TopBar";

import Menu from "../Components/Menu";

const Wrapper = styled.div`
  display: flex;
`;

const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  width: 100%;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  background-color: ${palette.yellow};
  padding: 0.6rem;
  border-radius: 20px;
  margin-right: 1rem;
`;

const Settings = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Menu />
      <SettingBox>
        <TopBar />
        <h3>더보기</h3>
        <ImgBox>
          <img
            alt="카카오톡"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODAyMDJfOTAg/MDAxNTE3NTAyODA4ODI0.cxuAkiwL2Dw5FUxUYWTwA2GUwlqpLzgRwjHirNDC6Cog.fTa3ixKaDFaD7DM6ctC0BodxnM_1DTdUsp3IzmOwsJkg.PNG.marketstory24/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1_%EB%A1%9C%EA%B3%A0_3.png?type=w800"
          />
        </ImgBox>
        <h4>새 소식</h4>
        <h4>공지사항</h4>
        <h4>환경설정</h4>
        <h4>도움말</h4>
        <Row>
          <h4>카카오톡 정보</h4>
          <Button onClick={() => alert("최신 버전으로 업데이트 되었습니다.")}>
            업데이트 하기
          </Button>
        </Row>
      </SettingBox>
    </Wrapper>
  );
};

export default Settings;
