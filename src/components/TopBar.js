import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
function TopBar({ current, onSearchButtonClicked }) {
  const menu = { friends: '친구', chat: '채팅', settings: '설정' };
  return (
    <>
      <Wrapper>
        <Title>{menu[current]}</Title>
        <AiOutlineSearch
          size={30}
          onClick={onSearchButtonClicked}
        ></AiOutlineSearch>
      </Wrapper>
    </>
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
