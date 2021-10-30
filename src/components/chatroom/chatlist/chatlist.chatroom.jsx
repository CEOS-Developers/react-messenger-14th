import React, { useState } from "react";
import Data from "./friends";
import { Link } from "react-router-dom";
import "./chatlist.chatroom.scss";

function Preview({ user, name, lastChat, url }) {
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

function ChatList() {
  let [chat, setChat] = useState(Data);
  return (
    <>
      <div className="chatlist">
        {chat.map((object, i) => {
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
        })}
      </div>
    </>
  );
}

export default ChatList;
