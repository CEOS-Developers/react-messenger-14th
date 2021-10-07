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
  const [isMe, setIsMe] = useState(true);

  const handleSubmitButtonClick = () => {
    // form이 clear되면서 todoList에 값이 추가되어야 함.
    // props.onSubmit(text);
    console.log(text);
    console.log(new Date().getTime());
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

  function onClickToggle() {
    // UserProfile을 바꿔서 보여줘야 함.
    console.log('messengercontainer에서 클릭');

    setIsMe(!isMe);
    console.log(isMe);
  }

  function renderForm() {
    return (
      <MessengerTextFormContainer>
        <Form onSubmit={handleSubmit}>
          <Button paddingLeft="20px">
            <img
              className="icon"
              src="img/emoji.png"
              width="24px"
              alt="emoji"
            />
          </Button>
          <TextInput
            type="text"
            placeholder="메시지 입력..."
            onChange={onChange}
            value={text}
          />
          <Button>
            <img
              className="icon"
              src="img/gallery.png"
              width="24px"
              alt="emoji"
            />
          </Button>
          <Button>
            <img
              className="icon"
              src="img/heart.png"
              width="24px"
              alt="emoji"
            />
          </Button>
        </Form>
      </MessengerTextFormContainer>
    );
  }

  function renderMessages() {
    return <div></div>;
  }

  function renderProfile() {
    return (
      <UserProfile onClick={onClickToggle}>
        {isMe ? (
          <>
            <ProfileImage
              alt="profile-img"
              src="img/1.png"
              width="22px"
              height="22px"
            />
            <h4>__kiuk</h4>
          </>
        ) : (
          <>
            <ProfileImage
              alt="profile-img"
              src="img/noImg.png"
              width="22px"
              height="22px"
            />
            <h4>n0wkim</h4>
          </>
        )}
      </UserProfile>
    );
  }

  return (
    <Container>
      <MessengerHeaderContainer>
        {renderProfile()}
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
        {renderMessages()}
        {renderForm()}
      </MessengerContentContainer>
    </Container>
  );
};

export default MessengerContainer;
