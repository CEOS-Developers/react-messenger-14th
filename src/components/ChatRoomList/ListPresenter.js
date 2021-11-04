import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Container = styled.div`
  flex-direction: column;
  border-right: 1px solid ${COLORS.primary};
  background-color: white;
  // mobile version
  @media screen and (max-width: 600px) {
    height: 100vh;
    width: 100vw;
  }
`;
export const RowContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin: 15px;
`;
export const RecentMessageContainer = styled.div`
  font-size: 14px;
  color: gray;
`;
export const ColContainer = styled.div`
  flex-direction: column;
  background-color: white;
  display: flex;
  margin-left: 10px;
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

  justify-content: center;
  align-items: center;

  // tablet version
  @media screen and (max-width: 920px) {
    width: 300px;
  }

  // mobile version
  @media screen and (max-width: 600px) {
    width: inherit;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
