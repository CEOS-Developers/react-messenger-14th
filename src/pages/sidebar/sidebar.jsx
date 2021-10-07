import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import chatting from '../chatting/chatting';
import friends from '../friends/friends';
import more from '../more/more';
import { BsFillPersonFill, BsFillChatFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Router>
      <Nav>
        <Link to="/friends">
          <BsFillPersonFill></BsFillPersonFill>
        </Link>
        <Link to="/chatting">
          <BsFillChatFill></BsFillChatFill>
        </Link>
        <Link to="/more">
          <FiMoreHorizontal></FiMoreHorizontal>
        </Link>
      </Nav>
      <Route path="/chatting" component={chatting}></Route>
      <Route path="/friends" component={friends}></Route>
      <Route path="/more" component={more}></Route>
    </Router>
  );
};

const Nav = styled.nav`
  background-color: black;
`;
const StyledLink = styled(Link)`
  background-color: black;
`;

export default Sidebar;
