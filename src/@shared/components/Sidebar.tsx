import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SideBarMenuBtn from './SideBarMenuBtn';

const Sidebar = () => {
  const history = useHistory();

  const handleUsersMenuClick = () => {
    history.push('/users');
  };

  const handleChatRoomsMenuClick = () => {
    history.push('/chat-rooms');
  };

  const handleSettingsMenuClick = () => {
    history.push('/setting');
  };

  return (
    <SidebarContainer>
      <SideBarMenuBtn
        img={<i className="far fa-user"></i>}
        onClick={handleUsersMenuClick}
      />
      <SideBarMenuBtn
        img={<i className="far fa-comments"></i>}
        onClick={handleChatRoomsMenuClick}
      />
      <SideBarMenuBtn
        img={<i className="fas fa-ellipsis-h"></i>}
        onClick={handleSettingsMenuClick}
      />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 70px;
  height: 300px;

  padding: 0;
  margin-right: 10px;

  border-radius: 30px;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export default Sidebar;
