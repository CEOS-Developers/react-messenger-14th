import React from 'react';

import MainContainer from '../components/MainContainer';
import ListContainer from '../components/ListContainer';
import MessengerContainer from '../components/MessengerContainer';

const Home = () => {
  return (
    <MainContainer>
      <ListContainer />
      <MessengerContainer />
    </MainContainer>
  );
};

export default Home;
