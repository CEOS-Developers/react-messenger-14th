import React from 'react';
import styled from 'styled-components';

const More = () => {
  return (
    <>
      <MoreTitle>더보기</MoreTitle>
      <LogoContainer>
        <Logo src="./kakaowhite.png"></Logo>
      </LogoContainer>
      <Menu>새소식</Menu>
      <Menu>공지사항</Menu>
      <Menu>환경설정</Menu>
      <Menu>도움말</Menu>
      <Menu>
        <A href="https://github.com/bonjunku">
          개발자 github 놀러가기(⭐주는 당신. 최고.)
        </A>
      </Menu>
    </>
  );
};

const MoreTitle = styled.section`
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 35px;
`;
const LogoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
const Menu = styled.section`
  font-size: 20px;
  margin: 20px;
  font-weight: bold;
`;

const A = styled.a`
  text-decoration: none;

  :hover {
    color: red;
  }

  :visited {
    text-decoration: none;
  }
`;

export default More;
