import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  MessengerHeaderContainer,
  MessengerContentContainer,
  UserProfile,
  MessengerTextFormContainer,
  Form,
  TextInput,
  ChatContainer,
  Chat,
  ChatBubble,
  TextBox,
  TimeBox,
  HeartContainer,
} from './MessengerPresenter';

import { ProfileImage, Button, HeartImg } from '../icons';
import dateToString from '../../utils/date';

const MessengerContainer = ({ messengerData, onSubmit }) => {
  const [text, setText] = useState('');
  const [isMe, setIsMe] = useState(0);

  //scroll 조절
  const scrollRef = useRef();
  const [chatEdit, setChatEdit] = useState(false);

  function scrollToBottom() {
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }
  useEffect(() => {
    scrollToBottom();
  }, [chatEdit]);

  const handleSubmitButtonClick = () => {
    // form이 clear되면서 todoList에 값이 추가되어야 함.
    if (!text) {
      window.alert('공백 메시지는 보낼 수 없어요~');
    } else {
      onSubmit({
        userId: isMe,
        text: text,
        date: new Date().getTime(),
        isHeart: false,
      });
      setText('');
      setChatEdit(!chatEdit);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitButtonClick();
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onHeartButtonClick = () => {
    // heart submit해야함.
    setText('❤️');
    onSubmit({
      userId: isMe,
      text: text,
      date: new Date().getTime(),
      isHeart: true,
    });
    setChatEdit(!chatEdit);
  };
  // 나인지, 상대인지 토글
  function onClickToggle() {
    setIsMe(!isMe);
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
          <Button onClick={onHeartButtonClick}>
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

  function renderHeart() {
    return (
      <HeartContainer>
        <HeartImg
          alt="profile-img"
          src="img/redHeart.png"
          width="44px"
          height="44px"
        />
      </HeartContainer>
    );
  }

  function renderMessages() {
    return messengerData.chatData.map((element) => {
      return (
        <Chat isMe={element.userId} key={element.date}>
          {renderProfile(element.userId)}
          {element.isHeart ? (
            renderHeart()
          ) : (
            <ChatBubble>
              <TextBox>{element.text}</TextBox>
            </ChatBubble>
          )}
          <TimeBox>{dateToString(element.date)}</TimeBox>
        </Chat>
      );
    });
  }

  function renderProfile(prop, isTop) {
    return (
      <>
        {prop ? (
          <>
            <ProfileImage
              alt="profile-img"
              src="img/1.png"
              width="22px"
              height="22px"
            />
            <>{isTop ? <h4>__kiuk</h4> : <></>}</>
          </>
        ) : (
          <>
            <ProfileImage
              alt="profile-img"
              src="img/noImg.png"
              width="22px"
              height="22px"
            />
            <>{isTop ? <h4>n0wkim</h4> : <></>}</>
          </>
        )}
      </>
    );
  }

  return (
    <Container>
      <MessengerHeaderContainer>
        <UserProfile onClick={onClickToggle}>
          {renderProfile(isMe, true)}
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
        <ChatContainer ref={scrollRef}>{renderMessages()}</ChatContainer>
        {renderForm()}
      </MessengerContentContainer>
    </Container>
  );
};

export default MessengerContainer;
