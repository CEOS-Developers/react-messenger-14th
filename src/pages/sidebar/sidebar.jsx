import { BsFillPersonFill, BsFillChatFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Nav>
      <StyledLink to="/friends">
        <BsFillPersonFill />
      </StyledLink>
      <StyledLink to="/chatting">
        <BsFillChatFill />
      </StyledLink>
      <StyledLink to="/more">
        <FiMoreHorizontal />
      </StyledLink>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: var(--color-side-bar);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 7vmax;
`;

const StyledLink = styled(Link)`
  color: var(--color-side-bar-icon);
  width: 100%;
  text-align: center;
  font-size: 3vmax;
  margin-top: 30px;
`;

export default Sidebar;
