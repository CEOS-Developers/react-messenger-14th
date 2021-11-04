import React, { useState, useEffect } from 'react';

import { MainContainer } from '../components/MainContainer';
import ListContainer from '../components/ChatRoomList/ListContainer';
import MessengerContainer from '../components/ChatRoom/MessengerContainer';
import chatdata from '../data/chats.json';

const Home = () => {
  // 채팅방에 대한 모든 정보
  const [messengerData, setMessengerData] = useState([
    {
      id: null,
      recentChatSend: null,
      chatData: [{}],
    },
  ]);

  // form에서 입력받은대로 submit결과를 핸들링
  const handleSubmit = (input) => {
    console.log(input);
    const newObj = messengerData;
    newObj.recentChatSend = input.date;
    newObj.chatData = [
      ...newObj.chatData,
      {
        date: input.date,
        text: input.text,
        userId: input.userId,
        isHeart: input.isHeart,
      },
    ];
    // set하지 않았는데 왜 화면에 찍히지?
    //console.log(newObj);
    setMessengerData(newObj);
  };

  useEffect(() => {
    setMessengerData(chatdata);
  }, []);

  return (
    <MainContainer>
      <ListContainer messengerData={messengerData} />
      <MessengerContainer
        onSubmit={handleSubmit}
        messengerData={messengerData[0]}
      />
    </MainContainer>
  );
};

export default Home;
