import React, { useState } from 'react';
import {
  Container,
  MessengerHeaderContainer,
  MessengerContentContainer,
  UserProfile,
  MessengerTextFormContainer,
  Form,
  TextInput,
} from './MessengerPresenter';

import { ProfileImage, Button } from './Icons';

const MessengerContainer = () => {
  const [text, setText] = useState('');

  const handleSubmitButtonClick = () => {
    // form이 clear되면서 todoList에 값이 추가되어야 함.
    // props.onSubmit(text);
    setText('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitButtonClick();
  };
  const onChange = (e) => {
    const nextForm = e.target.value;
    setText(nextForm);
  };

  return (
    <Container>
      <MessengerHeaderContainer>
        <UserProfile>
          <ProfileImage
            alt="profile-img"
            src="img/1.png"
            width="22px"
            height="22px"
          />
          <h4>__kiuk</h4>
        </UserProfile>
        <Button>
          <img
            className="icon"
            src="img/info.png"
            width="22px"
            alt="info"
          ></img>
        </Button>
      </MessengerHeaderContainer>
      <MessengerContentContainer>
        <p>messenger 채팅방</p>
        <MessengerTextFormContainer>
          <Form onSubmit={handleSubmit}>
            <Button paddingLeft="20px">
              <img
                className="icon"
                src="img/emoji.png"
                width="24px"
                alt="emoji"
              ></img>
            </Button>
            <TextInput
              type="text"
              placeholder="메시지 입력..."
              onChange={onChange}
              value={text}
            ></TextInput>
            <Button>
              <img
                className="icon"
                src="img/gallery.png"
                width="24px"
                alt="emoji"
              ></img>
            </Button>
            <Button>
              <img
                className="icon"
                src="img/heart.png"
                width="24px"
                alt="emoji"
              ></img>
            </Button>
          </Form>
        </MessengerTextFormContainer>
      </MessengerContentContainer>
    </Container>
  );
};

export default MessengerContainer;
