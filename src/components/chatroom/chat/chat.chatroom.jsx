import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./chat.chatroom.scss";
import Form from "./form/form.chatroom";
import ChatLog from "./chatlog/chatlog.chatroom";
import Data from "./friends";
import Header from "./header/header.chatroom";

function Chat() {
  let { id } = useParams();
  let [chats, setChats] = useState(Data);
  let [userId, setUserId] = useState(0);

  return (
    <div className="Chat">
      <Header
        id={id}
        name={chats[id - 1].name}
        img={chats[id - 1].img}
        userId={userId}
        setUserId={setUserId}
      />
      <ChatLog id={id} chats={chats[id - 1].chats} url={chats[id - 1].img} />
      <Form
        className="inputForm"
        id={id}
        userId={userId}
        chats={chats}
        setChats={setChats}
      />
    </div>
  );
}

export default Chat;
