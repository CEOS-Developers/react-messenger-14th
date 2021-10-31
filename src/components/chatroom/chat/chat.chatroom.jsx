import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./chat.chatroom.scss";
import Form from "./form.chatroom";
import ChatLog from "./chatlog.chatroom";
import Data from "./friends";

function Chat() {
  let { id } = useParams();
  let [chats, setChats] = useState(Data);

  return (
    <>
      <ChatLog id={id} chats={chats[id - 1].chats} url={chats[id - 1].img} />
      <Form id={id} setChats={setChats} />
    </>
  );
}

export default Chat;
