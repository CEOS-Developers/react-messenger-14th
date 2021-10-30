import React from "react";
import Header from "./header/header.chatroom";
import Chat from "./chat/chat.chatroom";
import ChatList from "./chatlist/chatlist.chatroom";
import { Route } from "react-router";

function Chatroom() {
  return (
    <>
      <Route exact path="/chatroom">
        <Header />
        <ChatList />
      </Route>
      <Route path="/chatroom/:id">
        <Chat />
      </Route>
    </>
  );
}

export default Chatroom;
