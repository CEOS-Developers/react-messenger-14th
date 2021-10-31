import React, { useState } from "react";
import "./chatlog.chatroom.scss";

function ChatLog({ id, chats, url }) {
  return (
    <div className="chatroom">
      {chats.map((chat, i) => {
        return (
          <div className={`user${chat.id}`}>
            <img src={url} alt="user" />
            <p>{chat.chat}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ChatLog;
