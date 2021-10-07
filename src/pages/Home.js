import React, { useState } from 'react';

import MainContainer from '../components/MainContainer';
import ListContainer from '../components/ListContainer';
import MessengerContainer from '../components/MessengerContainer';

const Home = () => {
  // 채팅방에 대한 모든 정보
  const [messengerData, setMessengerData] = useState({
    id: 1,
    recentChatSend: new Date(2021, 9, 8, 1, 32, 10, 22).getTime(),
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
    ],
  });

  // form에서 입력받은대로 submit결과를 핸들링
  const handleSubmit = (input) => {
    if (input) {
      console.log(input);
    }
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
