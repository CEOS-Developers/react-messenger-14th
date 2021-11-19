import React, { useState, useEffect } from 'react';

import { MainContainer } from '../components/MainContainer';
import ListContainer from '../components/ChatRoomList/ListContainer';
import MessengerContainer from '../components/ChatRoom/MessengerContainer';
import chatdata from '../data/chats.json';
import { useParams } from 'react-router-dom';

interface Prop {
  userId: number;
  text: string;
  date: number;
  isHeart: boolean;
  with: number;
}

const Home = () => {
  // 채팅방에 대한 모든 정보
  const [messengerData, setMessengerData] = useState<any>([
    {
      id: null,
      recentChatSend: null,
      chatData: [{}],
    },
  ]);
  const [room, setRoom] = useState<boolean>(true);
  const { path } = useParams<string>();
  const [chatRoomId, setChatRoomId] = useState<number>(1);

  // form에서 입력받은대로 submit결과를 핸들링
  const handleSubmit = (input: Prop) => {
    const newObj = messengerData;
    newObj[input.with - 1].recentChatSend = input.date;
    newObj[input.with - 1].chatData = [
      ...newObj[input.with - 1].chatData,
      {
        date: input.date,
        text: input.text,
        userId: input.userId,
        isHeart: input.isHeart,
      },
    ];
    setMessengerData(newObj);
  };

  function handleChatRoomId(path: any) {
    if (typeof path == 'string') {
      setChatRoomId(parseInt(path));
    }
  }

  useEffect(() => {
    setMessengerData(chatdata);
    handleChatRoomId(path);
  }, [path]);

  const handleRoom = (input: boolean) => {
    setRoom(input);
  };

  return (
    <MainContainer>
      <ListContainer
        messengerData={messengerData}
        room={room}
        toggleRoom={handleRoom}
      />
      <MessengerContainer
        room={!room}
        toggleRoom={handleRoom}
        onSubmit={handleSubmit}
        messengerData={messengerData[chatRoomId - 1]}
        //path-1
      />
    </MainContainer>
  );
};

export default Home;
