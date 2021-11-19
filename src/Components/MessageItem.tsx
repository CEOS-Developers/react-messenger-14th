import styled from "styled-components";
import Data from "../Data/friends.json";
import palette from "../styles/palette";

const MyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
`;

const YourContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1rem;
`;

const MyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 10px 10px 0px 10px;
  background-color: ${palette.yellow};
  border: 5px;
  height: 3rem;
  width: 13rem;
`;

const YourText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 10px 10px 10px 0px;
  background-color: ${palette.white};
  border: 5px;
  height: 3rem;
  width: 13rem;
`;

const ProfileImage = styled.img`
  display: flex;
  border-radius: 50px;
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin-left: 1rem;
`;

type MessageItemProps = {
  message: { id: number; text: string; isMe: boolean };
};

function MessageItem({ message }: MessageItemProps) {
  const { text, isMe } = message;
  return (
    <>
      {isMe ? (
        <MyContainer>
          <MyText>{text}</MyText>
          <ProfileImage src={Data.friends[0].photo} alt="프로필" />
        </MyContainer>
      ) : (
        <YourContainer>
          <ProfileImage src={Data.friends[1].photo} alt="프로필" />
          <YourText>{text}</YourText>
        </YourContainer>
      )}
    </>
  );
}

export default MessageItem;
