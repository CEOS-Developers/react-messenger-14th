import styled from 'styled-components';
import COLORS from '../constants/colors';

export const Container = styled.div`
  flex-direction: column;
  background-color: white;
  // mobile version
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const MessengerContentContainer = styled.div`
  height: 75vh;
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  justify-content: space-between;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MessengerHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 560px;
  height: 60px;
  border-bottom: 1px solid ${COLORS.primary};
  align-items: center;
  justify-content: space-between;
`;
export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-left: 40px;
`;

export const MessengerTextFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 65px;
  padding: 20px;
  background-color: white;

  // mobile version
  @media screen and (max-width: 600px) {
  }
`;
export const Form = styled.form`
  height: 45px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.lightGray};
  border-radius: 22px;
`;
export const TextInput = styled.input`
  flex: 1;
  padding: 0.2rem;
  margin-left: 10px;
  margin-right: 10px;
  text-align: left;
  //padding-left: 20px;
`;
