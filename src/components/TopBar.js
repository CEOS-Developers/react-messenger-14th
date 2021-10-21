import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
function TopBar() {
  return (
    <Wrapper>
      <Title>친구</Title>
      <AiOutlineSearch size={30}></AiOutlineSearch>
    </Wrapper>
  );
}
export default TopBar;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;
const Title = styled.div`
  font-size: 30px;
`;
