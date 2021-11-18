import {
  Container,
  ListHeaderContainer,
  ListContentContainer,
  RowContainer,
} from './ListPresenter';
import ModalComponent from './Modal';
import { ListContent } from './ListContent';

const ListContainer = ({ messengerData, room, toggleRoom }) => {
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
