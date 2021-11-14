import React from 'react';
import styled from 'styled-components';
import { hoverButtonAnime } from '../style/animation';

interface SidbarMenuBtnI extends React.HTMLAttributes<HTMLElement> {
  img?: any;
}

const SideBarMenuBtn = ({ img, onClick: handleMenuClick }: SidbarMenuBtnI) => {
  return <MenuBtn onClick={handleMenuClick}>{img}</MenuBtn>;
};

const MenuBtn = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 30px;

  ${hoverButtonAnime}
`;

export default SideBarMenuBtn;
