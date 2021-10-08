import React, { useState } from 'react';

import { MainContainer } from '../components/MainContainer';
import ListContainer from '../components/ChatRoomList/ListContainer';
import MessengerContainer from '../components/ChatRoom/MessengerContainer';

const Home = () => {
  // 채팅방에 대한 모든 정보
  const [messengerData, setMessengerData] = useState({
    id: 1,
    recentChatSend: new Date(2021, 9, 8, 1, 32, 10, 28).getTime(),
    chatData: [
      {
        date: new Date(2021, 9, 8, 1, 31, 10, 22).getTime(),
        text: '너가 선택한 코딩이다',
        isMe: false,
      },
      {
        date: new Date(2021, 9, 8, 1, 32, 10, 22).getTime(),
        text: '악으로 깡으로 버텨라',
        isMe: false,
      },
      {
        date: new Date(2021, 9, 8, 1, 32, 10, 28).getTime(),
        text: '나도 자고싶어 나도 자고싶어 나도 자고싶어 나도 자고싶어 나도 자고싶어 나도 자고싶어 나도 자고싶어',
        isMe: true,
      },
      {
        date: new Date(2021, 9, 8, 13, 32, 10, 28).getTime(),
        text: '헐 어제 밤샜구나',
        isMe: false,
      },
      {
        date: new Date(2021, 9, 8, 13, 32, 10, 28).getTime(),
        text: '그래서 어디까지 했어 코딩',
        isMe: false,
      },
    ],
  });

  // form에서 입력받은대로 submit결과를 핸들링
  const handleSubmit = (input) => {
    const newObj = messengerData;
    newObj.recentChatSend = input.date;
    if (input.id) {
      console.log('내가 보내는 채팅');
      newObj.chatData = [
        ...newObj.chatData,
        { date: input.date, text: input.text, isMe: true },
      ];
      // set하지 않았는데 왜 화면에 찍히지?
    } else {
      console.log('상대가 보내는 채팅');
      newObj.chatData = [
        ...newObj.chatData,
        { date: input.date, text: input.text, isMe: false },
      ];
    }
    // set하지 않았는데 왜 화면에 찍히지?
    //console.log(newObj);
    setMessengerData(newObj);
  };

  return (
    <MainContainer>
      <ListContainer />
      <MessengerContainer
        onSubmit={handleSubmit}
        messengerData={messengerData}
      />
    </MainContainer>
  );
};

export default Home;
