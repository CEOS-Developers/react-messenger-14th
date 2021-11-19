import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { HeartImg, ProfileImage } from '../icons';

interface Props {
  room: boolean;
}
interface ChatProps {
  isMe: number;
}
interface InputProps {
  text: string;
  handleInput: (prevState: string) => void;
}
export const Container = styled.div<Props>`
  flex-direction: column;
  background-color: white;
  // mobile version
  @media screen and (max-width: 600px) {
    display: ${(props) => (props.room ? 'flex' : 'none')};
    height: 100vh;
    width: 100vw;
  }
`;
export const GoBack = styled.img<Props>`
  @media screen and (max-width: 600px) {
    background-image: ${({ src }) => `url(${src})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-left: 10px;
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

export const Chat = styled.div<ChatProps>`
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
  margin-right: 10px;
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
  margin-left: 15px;
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
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
`;

export const Input = ({ text, handleInput }: InputProps) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleInput(e.currentTarget.value);
  };
  return (
    <TextInput
      type="text"
      placeholder="메시지 입력..."
      onChange={onChange}
      value={text}
    />
  );
};

export const Heart = () => {
  return (
    <HeartContainer>
      <HeartImg
        alt="profile-img"
        src="img/redHeart.png"
        width="44px"
        height="44px"
      />
    </HeartContainer>
  );
};

interface ProfileProps {
  prop: number;
  isTop: boolean;
  id: number;
  name?: string;
}

export const Profile = ({ prop, isTop, id, name }: ProfileProps) => {
  return (
    <>
      {prop ? (
        <>
          <ProfileImage
            alt="profile-img"
            src={`img/${id}.png`}
            width="22px"
            height="22px"
          />
          <>{isTop ? <h4>{name}</h4> : <></>}</>
        </>
      ) : (
        <>
          <ProfileImage
            alt="profile-img"
            src="img/noImg.png"
            width="22px"
            height="22px"
          />
          <>{isTop ? <h4>n0wkim</h4> : <></>}</>
        </>
      )}
    </>
  );
};
