import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Wrap } from './components/MainContainer';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Header from './components/Header/HeaderContainer';

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Wrap>
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Wrap>
    </>
  );
};

export default App;
