import React, { useState } from "react";
import Data from "./friends";

function ChatLog({ id }) {
  let [chats, setChats] = useState(Data[id - 1].chats);
  return (
    <>
      {chats.map((chat, i) => {
        return <div>{chat.chat}</div>;
      })}
    </>
  );
}

export default ChatLog;
