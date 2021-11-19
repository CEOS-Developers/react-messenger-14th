import React from 'react';
import styled from 'styled-components';

const Cover = () => {
  return (
    <CoverContainer>
      <Img src="./kakao.png" alt="kakao"></Img>
    </CoverContainer>
  );
};

const Img = styled.img`
  width: 20vmax;
  height: 20vmax;
`;

const CoverContainer = styled.div`
  display: flex;
  background-color: #f7e600;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default Cover;
