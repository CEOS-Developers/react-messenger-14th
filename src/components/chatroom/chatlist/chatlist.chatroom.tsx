import React, { useState } from "react";
import Data from "../friends";
import { Link } from "react-router-dom";
import "./chatlist.chatroom.scss";

type PreviewProps = {
  user: string;
  name: string;
  lastChat: string;
  url: string;
};

function Preview({ user, name, lastChat, url }: PreviewProps) {
  return (
    <div className="row">
      <img src={url} alt={user}></img>
      <div>
        <h3>{name}</h3>
        <p>{lastChat}</p>
      </div>
    </div>
  );
}

type ChatListProps = {
  chats: any;
  setChats: Function;
};

function ChatList({ chats, setChats }: ChatListProps) {
  return (
    <>
      <div className="chatlist">
        {chats.map(
          (
            object: {
              id: string;
              name: string;
              chats: string | any[];
              img: string;
            },
            i: number
          ) => {
            return (
              <Link
                to={`/chatroom/${object.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Preview
                  key={i}
                  user={object.id}
                  name={object.name}
                  lastChat={object.chats[object.chats.length - 1].chat}
                  url={object.img}
                />
              </Link>
            );
          }
        )}
      </div>
    </>
  );
}

export default ChatList;
