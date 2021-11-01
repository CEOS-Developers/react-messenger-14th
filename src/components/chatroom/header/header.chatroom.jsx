import React, { useState } from "react";
import searchIcon from "./mag.png";

function Search(chats, setChats, value) {
  let tempChats = chats.filter((chat) => {
    chat.name.includes(value) ||
      chat.chats[chat.chats.length - 1].chat.includes(value);
  });
  // console.log(tempChats);
  console.log(value);
  // setChats(tempChats);
}

function Header({ chats, setChats }) {
  let [searchToggle, setSearchToggle] = useState(false);

  return (
    <div className="Header">
      <h1>채팅</h1>
      {searchToggle === true ? (
        <input
          placeholder="검색"
          onChange={(e) => {
            Search(chats, setChats, e.target.value);
          }}
        />
      ) : null}
      <div className="Buttons">
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            setSearchToggle(!searchToggle);
          }}
        ></img>
      </div>
    </div>
  );
}

export default Header;
