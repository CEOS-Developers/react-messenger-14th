import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Asset/GlobalStyle";

import ChatPage from "./Pages/ChatPage";
import FriendsPage from "./Pages/FriendsPage";
import Settings from "./Pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <GlobalStyle />
        <Route path="/" element={<FriendsPage />} />
        <Route path="/chatPage" element={<ChatPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
