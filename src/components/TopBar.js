import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import { AiOutlineSearch } from 'react-icons/ai';
function TopBar({ current }) {
  const [searchClick, setSearchClick] = useState(false);
  const menu = { friends: '친구', chat: '채팅', settings: '설정' };
  const onSearchButtonClicked = () => {
    setSearchClick(!searchClick);
  };
  return (
    <>
      <Wrapper>
        <Title>{menu[current]}</Title>
        <AiOutlineSearch
          size={30}
          onClick={onSearchButtonClicked}
        ></AiOutlineSearch>
      </Wrapper>
      {searchClick ? (
        <SearchBox searchClick={searchClick} setSearchClick={setSearchClick} />
      ) : (
        ''
      )}
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
