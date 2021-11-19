import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  MessengerHeaderContainer,
  MessengerContentContainer,
  UserProfile,
  MessengerTextFormContainer,
  Form,
  ChatContainer,
  GoBack,
  TopContainer,
  Profile,
  Input,
} from './MessengerPresenter';

import { Button, EmojiIcon, GalleryIcon, HeartIcon } from '../icons';
import { useParams } from 'react-router-dom';
import { Messages } from './Messages';

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
interface SubmitProps {
  userId: number;
  text: string;
  date: number;
  isHeart: boolean;
  with: number;
}

interface Props {
  messengerData: MessengerProps;
  onSubmit: (arg0: SubmitProps) => void;
  room: boolean;
  toggleRoom: any;
}
const MessengerContainer = ({
  messengerData,
  onSubmit,
  room,
  toggleRoom,
}: Props) => {
  const { path } = useParams();
  const [text, setText] = useState<string>('');
  const [isMe, setIsMe] = useState<number>(0);

  //scroll 조절
  const scrollRef: any = useRef<React.MutableRefObject<undefined>>();
  const [chatEdit, setChatEdit] = useState<boolean>(false);

  function scrollToBottom() {
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }
  useEffect(() => {
    scrollToBottom();
  }, [chatEdit]);

  useEffect(() => {
    scrollToBottom();
  }, [path]);

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
        with: messengerData.id,
      });
      setText('');
      setChatEdit(!chatEdit);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSubmitButtonClick();
  };
  const onHeartButtonClick = () => {
    // heart submit해야함.
    setText('');
    onSubmit({
      userId: isMe,
      text: '❤️',
      date: new Date().getTime(),
      isHeart: true,
      with: messengerData.id,
    });
    setChatEdit(!chatEdit);
  };
  // 나인지, 상대인지 토글
  function onClickToggle() {
    if (isMe) {
      setIsMe(0);
    } else {
      setIsMe(messengerData.id);
    }
  }
  const handleRoomClick = () => {
    toggleRoom(room);
  };

  return (
    <Container room={room}>
      <MessengerHeaderContainer>
        <TopContainer>
          <GoBack
            room={room}
            onClick={handleRoomClick}
            alt="profile-img"
            src="img/goback.png"
            width="22px"
            height="22px"
          />
          <UserProfile onClick={onClickToggle}>
            <Profile
              prop={isMe}
              isTop={true}
              id={messengerData.id}
              name={messengerData.name}
            />
          </UserProfile>
        </TopContainer>
        <Button>
          <img className="icon" src="img/info.png" width="22px" alt="info" />
        </Button>
      </MessengerHeaderContainer>
      <MessengerContentContainer>
        <ChatContainer ref={scrollRef}>
          <Messages messengerData={messengerData} />
        </ChatContainer>
        <MessengerTextFormContainer>
          <Form onSubmit={handleSubmit}>
            <EmojiIcon />
            <Input text={text} handleInput={setText} />
            <GalleryIcon />
            <HeartIcon onClick={onHeartButtonClick} />
          </Form>
        </MessengerTextFormContainer>
      </MessengerContentContainer>
    </Container>
  );
};

export default MessengerContainer;
