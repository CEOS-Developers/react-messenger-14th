import styled from 'styled-components';
import COLORS from '../constants/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 935px;
  justify-content: center;
  align-items: center;

  margin: 20px;

  border: 1px solid ${COLORS.primary};
  border-radius: 3px;

  // tablet
  @media screen and (max-width: 920px) {
    margin: 0px;
  }

  // mobile
  @media screen and (max-width: 600px) {
    margin: 0px;
    border: none;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
