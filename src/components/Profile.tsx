import styled from 'styled-components';
function Profile({ user, text }: { user: any; text: string }) {
  return (
    <ProfileWrapper key={user.id}>
      <ProfileImg src={process.env.PUBLIC_URL + '/img/' + user.profileImg} />
      <NameWrapper>
        <Name>{user.name}</Name>
        <div>{text}</div>
      </NameWrapper>
    </ProfileWrapper>
  );
}
const ProfileWrapper = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  border: 1px solid lightgray;
`;
const NameWrapper = styled.div`
  line-height: 25px;
  margin-left: 10px;
`;
const Name = styled.div`
  font-weight: bold;
`;
export default Profile;
