import {
  Container,
  ListHeaderContainer,
  ListContentContainer,
  RowContainer,
} from './ListPresenter';
import ModalComponent from './Modal';
import { ListContent } from './ListContent';

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
  room: boolean;
  toggleRoom: any;
}

const ListContainer = ({ messengerData, room, toggleRoom }: Props) => {
  const handleClick = () => {
    toggleRoom(!room);
  };

  return (
    <Container room={room}>
      <ListHeaderContainer>
        <RowContainer>
          <h4>n0wkim</h4>
          <ModalComponent messengerData={messengerData} />
        </RowContainer>
      </ListHeaderContainer>
      <ListContentContainer>
        <ListContent handleClick={handleClick} messengerData={messengerData} />
      </ListContentContainer>
    </Container>
  );
};

export default ListContainer;
