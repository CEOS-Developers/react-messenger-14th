import React from 'react';
import { Route } from 'react-router-dom';

import Wrap from './components/Wrap';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Header from './components/HeaderContainer';

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Wrap>
        <Route path="/" component={Home} exact={true} />
        <Route path="/settings" component={Settings} />
      </Wrap>
    </>
  );
};

export default App;
