import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
interface IMenu {
  [index: string]: string;
}
function TopBar({
  current,
  onSearchButtonClicked,
}: {
  current: string;
  onSearchButtonClicked: any;
}) {
  const menu: IMenu = { friends: '친구', chat: '채팅', settings: '설정' };
  return (
    <>
      <Wrapper>
        <Title>{menu[current]}</Title>
        {current === 'friends' || current === 'chat' ? (
          <AiOutlineSearch
            size={30}
            onClick={onSearchButtonClicked}
          ></AiOutlineSearch>
        ) : (
          ''
        )}
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
