import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillPersonFill, BsFillChatFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
function SideBar() {
  return (
    <Wrapper>
      <Link to="/friends">
        <BsFillPersonFill size={30} style={style} />
      </Link>
      <Link to="/chat">
        <BsFillChatFill size={25} style={style} />
      </Link>
      <Link to="/settings">
        <FiMoreHorizontal size={25} style={style} />
      </Link>
    </Wrapper>
  );
}
const style = {
  marginTop: '20px',
  size: '25',
  color: '#949494',
};
const Wrapper = styled.div`
  width: 4vw;
  background: #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;
export default SideBar;
