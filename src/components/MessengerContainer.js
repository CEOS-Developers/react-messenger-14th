import React from 'react';
import {
  Container,
  MessengerHeaderContainer,
  MessengerContentContainer,
} from './MessengerPresenter';

const MessengerContainer = () => {
  return (
    <Container>
      <MessengerHeaderContainer>
        <p>대화상대 + info 아이콘</p>
      </MessengerHeaderContainer>
      <MessengerContentContainer>
        <p>messenger 채팅방</p>
      </MessengerContentContainer>
    </Container>
  );
};

export default MessengerContainer;
