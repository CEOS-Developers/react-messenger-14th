import React from 'react';
import styled from 'styled-components';
import { BsFillPersonFill, BsFillChatFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
function SideBar() {
  return (
    <Wrapper>
      <BsFillPersonFill size={30} style={style} />
      <BsFillChatFill size={25} style={style} />
      <FiMoreHorizontal size={25} style={style} />
    </Wrapper>
  );
}
const style = {
  'margin-top': '20px',
  size: '25',
  color: '#949494',
};
const Wrapper = styled.div`
  width: 100px;
  height: 100vh;
  background: #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default SideBar;
