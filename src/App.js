import React from 'react';
import { Route } from 'react-router-dom';

import HomeContainer from './pages/HomeContainer';
import SettingsContainer from './pages/SettingsContainer';

const App = () => {
  return (
    <div>
      <Route path="/" component={HomeContainer} exact={true} />
      <Route path="/settings" component={SettingsContainer} />
    </div>
  );
};

export default App;
