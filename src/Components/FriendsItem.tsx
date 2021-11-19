import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  width: 100%;
  border-bottom: 1px lightgrey solid;
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

type FriendsItemProps = {
  photo: string;
  name: string;
  text: string;
};

function FriendsItem({ photo, name, text }: FriendsItemProps) {
  return (
    <Wrapper>
      <>
        <ProfileImage src={photo} alt="프로필" />
        <ProfileText>
          <h3>{name}</h3>
          <p>{text}</p>
        </ProfileText>
      </>
    </Wrapper>
  );
}

export default FriendsItem;
