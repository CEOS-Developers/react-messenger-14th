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
        <p>사용자 이름 + 새로운 메시지 보내는 아이콘 들어갈 예정</p>
      </ListHeaderContainer>
      <ListContentContainer>
        <p>채팅방 목록 있을 예정</p>
      </ListContentContainer>
    </Container>
  );
};

export default ListContainer;
