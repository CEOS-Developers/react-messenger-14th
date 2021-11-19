import React from "react";
import "./App.scss";
import { Route } from "react-router";
import SideBar from "./components/sidebar/sidebar.components";
import Chatroom from "./components/chatroom/chatroom.components";
import Profile from "./components/profile/profile.components";
import Other from "./components/other/other.components";

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div className="Main">
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/chatroom">
          <Chatroom />
        </Route>
        <Route path="/other">
          <Other />
        </Route>
      </div>
    </div>
  );
}

export default App;
