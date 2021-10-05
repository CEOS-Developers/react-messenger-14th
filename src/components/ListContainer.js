import React from 'react';
import {
  Container,
  ListHeaderContainer,
  ListContentContainer,
} from './ListPresenter';

const ListContainer = () => {
  return (
    <Container>
      <ListHeaderContainer>
        <h4>n0wkim</h4>
      </ListHeaderContainer>
      <ListContentContainer>
        <p>채팅방 목록 있을 예정</p>
      </ListContentContainer>
    </Container>
  );
};

export default ListContainer;
