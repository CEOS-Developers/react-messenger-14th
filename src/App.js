import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';

import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Route path="/" component={Home} exact={true} />
      <Route path="/settings" component={Settings} />
    </>
  );
};

export default App;
