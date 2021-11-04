import React, { useState, useEffect } from 'react';

import { MainContainer } from '../components/MainContainer';
import ListContainer from '../components/ChatRoomList/ListContainer';
import MessengerContainer from '../components/ChatRoom/MessengerContainer';
import chatdata from '../data/chats.json';
import { useParams } from 'react-router-dom';

const Home = () => {
  // 채팅방에 대한 모든 정보
  const [messengerData, setMessengerData] = useState([
    {
      id: null,
      recentChatSend: null,
      chatData: [{}],
    },
  ]);

  const { path } = useParams();

  // form에서 입력받은대로 submit결과를 핸들링
  const handleSubmit = (input) => {
    const newObj = messengerData;
    //console.log(input);
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
    // set하지 않았는데 왜 화면에 찍히지?
    setMessengerData(newObj);
  };
  function show() {
    alert('done');
    console.log(messengerData);
  }

  useEffect(() => {
    setMessengerData(chatdata);
  }, [path]);

  return (
    <MainContainer>
      <ListContainer messengerData={messengerData} />
      <MessengerContainer
        onSubmit={handleSubmit}
        messengerData={messengerData[path - 1]}
      />
    </MainContainer>
  );
};

export default Home;
