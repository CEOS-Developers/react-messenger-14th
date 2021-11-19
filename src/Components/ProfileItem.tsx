import styled from "styled-components";
import Data from "../Data/friends.json";
import palette from "../styles/palette";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  width: 96%;
  background-color: ${palette.blue};
  box-shadow: 0px 8px 10px ${palette.shadow};
  position: absolute;
  z-index: 99;
`;

const ProfileImage = styled.img`
  display: flex;
  border-radius: 50px;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  margin-left: 1rem;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  p,
  h3 {
    margin: 0px;
  }
`;

type ProfileItemProps = {
  message: { id: number; text: string; isMe: boolean };
  onToggle: () => void;
  bool: boolean;
};

function ProfileItem({ onToggle, bool }: ProfileItemProps) {
  return (
    <Wrapper onClick={() => onToggle()}>
      {bool ? (
        <>
          <ProfileImage src={Data.friends[0].photo} alt="프로필" />
          <ProfileText>
            <h3>어피치</h3>
            <p>현재 활동 중</p>
          </ProfileText>
        </>
      ) : (
        <>
          <ProfileImage src={Data.friends[1].photo} alt="프로필" />
          <ProfileText>
            <h3>네오</h3>
            <p>현재 활동 중</p>
          </ProfileText>
        </>
      )}
    </Wrapper>
  );
}

export default ProfileItem;
