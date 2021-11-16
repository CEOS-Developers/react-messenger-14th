import React, { useState } from "react";
import Header from "./header/header.chatroom";
import Chat from "./chat/chat.chatroom";
import ChatList from "./chatlist/chatlist.chatroom";
import { Route } from "react-router";
import Data from "./friends";

function Chatroom() {
  let [chats, setChats] = useState(Data);
  let [searchData, setSearchData] = useState("");
  let tempChats = chats.filter(
    (chat) =>
      chat.name.includes(searchData) ||
      chat.chats[chat.chats.length - 1].chat.includes(searchData)
  );

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchData(e.target.value);
  }

  return (
    <>
      <Route exact path="/chatroom">
        <Header onSearchChange={onSearchChange} />
        <ChatList chats={tempChats} setChats={setChats} />
      </Route>
      <Route path="/chatroom/:id">
        <Chat chats={chats} setChats={setChats} />
      </Route>
    </>
  );
}

export default Chatroom;
