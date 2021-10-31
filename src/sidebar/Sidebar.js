import React from 'react';
import styled from 'styled-components';

import SideBarMenuBtn from './components/SideBarMenuBtn';

const Sidebar = () => {
  const handleUsersMenuClick = () => {};

  const handleChatRoomsMenuClick = () => {};

  const handleSettingsMenuClick = () => {};

  return (
    <SidebarContainer>
      <SideBarMenuBtn
        img={<i class="far fa-user"></i>}
        handleMenuClick={handleUsersMenuClick}
      />
      <SideBarMenuBtn
        img={<i class="far fa-comments"></i>}
        handleMenuClick={handleChatRoomsMenuClick}
      />
      <SideBarMenuBtn
        img={<i class="fas fa-ellipsis-h"></i>}
        handleMenuClick={handleSettingsMenuClick}
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
