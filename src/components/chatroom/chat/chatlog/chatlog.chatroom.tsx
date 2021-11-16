import React, { useState, useEffect, useRef } from "react";
import "./chatlog.chatroom.scss";

type ChatLogProps = {
  id: number;
  chats: any;
  url: string;
};

function ChatLog({ id, chats, url }: ChatLogProps) {
  return (
    <div className="chatroom">
      {chats.map((chat: { id: number; chat: any }, i: number) => {
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
