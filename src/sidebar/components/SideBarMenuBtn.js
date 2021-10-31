import React from 'react';
import styled from 'styled-components';

const SideBarMenuBtn = ({ img, handleMenuClick }) => {
  return <MenuBtn onClick={handleMenuClick}>{img}</MenuBtn>;
};

const MenuBtn = styled.button`
  all: unset;
`;

export default SideBarMenuBtn;
