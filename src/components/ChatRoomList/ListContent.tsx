import { Link } from 'react-router-dom';
import { ProfileImage } from '../icons';
import {
  RowContainer,
  ColContainer,
  RecentMessageContainer,
} from './ListPresenter';

interface ChatProps {
  date: number;
  text: string;
  userId: number;
  isHeart: boolean;
}

interface MessengerProps {
  id: number;
  recentChatSend: number;
  name: string;
  chatData: Array<ChatProps>;
}

interface Props {
  messengerData: Array<MessengerProps>;
  handleClick: any;
}

export const ListContent = ({ messengerData, handleClick }: Props) => {
  return (
    <ul>
      {messengerData.map((element) => {
        return (
          <Link to={`/${element.id}`}>
            <RowContainer key={element.id} onClick={handleClick}>
              <ProfileImage
                alt="profile-img"
                src={`img/${element.id}.png`}
                width="56px"
                height="56px"
              />
              <ColContainer>
                <p>{element.name}</p>
                <RecentMessageContainer>
                  {element.chatData.slice(-1)[0].text}
                </RecentMessageContainer>
              </ColContainer>
            </RowContainer>
          </Link>
        );
      })}
    </ul>
  );
};
