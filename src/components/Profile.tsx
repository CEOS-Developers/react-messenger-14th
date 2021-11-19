import styled from 'styled-components';
import { IUser } from '../pages/ChatRoom';
import { ProfileImg } from './Styles';
function Profile({ user, text }: { user: IUser; text: string }) {
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
  height: 7vh;
  align-items: center;
`;
const NameWrapper = styled.div`
  line-height: 25px;
  margin-left: 10px;
`;
const Name = styled.div`
  font-weight: bold;
`;
export default Profile;
