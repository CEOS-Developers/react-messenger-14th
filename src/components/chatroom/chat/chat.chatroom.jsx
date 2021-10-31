import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./chat.chatroom.scss";
import Form from "./form.chatroom";
import ChatLog from "./chatlog.chatroom";

function Chat() {
  let { id } = useParams();

  return (
    <>
      <ChatLog id={id} />
      <Form />
    </>
  );
}

export default Chat;
