import React from "react";
import { Switch, Route } from "react-router";
import SideBar from "./components/sidebar/sidebar.components";
import Chatroom from "./components/chatroom/chatroom.components";
import Profile from "./components/profile/profile.components";
import Other from "./components/other/other.components";

function App() {
  return (
    <>
      <Switch>
        <SideBar></SideBar>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/chatroom">
          <Chatroom />
        </Route>
        <Route path="/other">
          <Other />
        </Route>
      </Switch>
    </>
  );
}

export default App;
