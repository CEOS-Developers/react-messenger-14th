import React, { useState } from "react";
import "./chatlog.chatroom.scss";

function ChatLog({ id, chats, url }) {
  return (
    <div className="chatroom">
      {chats.map((chat, i) => {
        return chat.id === 0 ? (
          <div className="user0">
            <img src="/images/profile1.jpeg" alt="user" />
            <p>{chat.chat}</p>
          </div>
        ) : (
          <div className="user1">
            <img src={url} alt="user" />
            <p>{chat.chat}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ChatLog;
