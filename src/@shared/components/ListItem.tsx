import styled from 'styled-components';
import { color } from '../style/color';
import { popup } from '../style/animation';

export const ListWrapper = styled.li`
  all: unset;

  display: flex;
  flex-direction: column;

  width: 330px;
  height: 50px;
  min-height: 50px;

  padding: 15px;
  margin-top: 30px;

  border: 1px solid white;
  border-radius: 30px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);

  &:hover {
    animation: ${popup} 1000ms;
  }
`;

export const ListItemTitle = styled.div`
  all: unset;

  padding: 0 5px 0 5px;
`;

export const ListItemWrapper = styled.div`
  all: unset;
  overflow-x: auto;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 10px;

  color: ${color.gray};
  font-size: 14px;
`;

export const ListItemContent = styled.div`
  all: unset;

  padding: 0 5px 0 5px;
`;
