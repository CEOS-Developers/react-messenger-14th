import React, { useState } from "react";
import Header from "./header/header.chatroom";
import Chat from "./chat/chat.chatroom";
import ChatList from "./chatlist/chatlist.chatroom";
import { Route } from "react-router";
import Data from "./friends";

function Chatroom() {
  let [chats, setChats] = useState(Data);

  return (
    <>
      <Route exact path="/chatroom">
        <Header />
        <ChatList chats={chats} setChats={setChats} />
      </Route>
      <Route path="/chatroom/:id">
        <Chat chats={chats} setChats={setChats} />
      </Route>
    </>
  );
}

export default Chatroom;
