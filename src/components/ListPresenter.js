import styled from 'styled-components';
import COLORS from '../constants/colors';

export const Container = styled.div`
  flex-direction: column;
  border-right: 1px solid ${COLORS.primary};
  background-color: white;
`;
export const ListContentContainer = styled.ul`
  height: 75vh;
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ListHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 60px;
  border-bottom: 1px solid ${COLORS.primary};

  // tablet version
  @media screen and (max-width: 600px) {
    width: 300px;
  }

  // mobile version
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
