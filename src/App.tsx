import { Route, Routes } from 'react-router-dom';

import { Wrap } from './components/MainContainer';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Settings from './pages/Settings';
import Header from './components/Header/HeaderContainer';

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Wrap>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:path" element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Wrap>
    </>
  );
};
export default App;
