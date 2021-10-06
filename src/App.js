import React, { useState } from 'react';
import Router from './Router';
import DefaultImg from './DefaultProfile.png';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [friends, setFriends] = useState([
    { id: 1, name: '시원', img: DefaultImg, status: '열심히 살자' },
    { id: 2, name: '지우', img: DefaultImg, status: '히히' },
    { id: 3, name: '친구1', img: DefaultImg, status: '친구1 상메' },
    { id: 4, name: '친구2', img: DefaultImg, status: '친구2 상메' },
    { id: 5, name: '친구3', img: DefaultImg, status: '친구3 상메' },
  ]);

  return (
    <>
      <Router isLoggedIn={isLoggedIn} friends={friends} />
    </>
  );
};

export default App;
