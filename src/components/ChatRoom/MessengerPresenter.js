import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Container = styled.div`
  flex-direction: column;
  background-color: white;
  // mobile version
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const ChatContainer = styled.div`
  height: inherit;
  display: flex;
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  flex-direction: column;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Chat = styled.div`
  display: flex;
  margin-top: 6px;
  margin-bottom: 6px;
  align-items: flex-end;
  flex-direction: ${(props) => (props.isMe ? 'row' : 'row-reverse')};
`;
export const ChatBubble = styled.div`
  display: flex;
  border: 1px solid ${COLORS.lightGray};
  border-radius: 22px;
  max-width: 236px;
  min-height: 44px;
  align-items: center;
  margin-right: 6px;
`;
export const TextBox = styled.span`
  overflow-wrap: break-word;
  white-space: normal;
  vertical-align: baseline;
  font-size: 14px;
  line-height: 18px;
  margin: -3px 0 -4px;
  padding: 16px;
`;
export const TimeBox = styled.span`
  vertical-align: baseline;
  font-size: 7px;
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${COLORS.grayFont};
`;
export const HeartContainer = styled.div`
  vertical-align: baseline;
  margin-left: 10px;
  margin-right: 10px;
`;
export const MessengerContentContainer = styled.div`
  height: 75vh;
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding-bottom: 10px;
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
