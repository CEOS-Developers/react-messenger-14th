import React, { useState } from "react";
import "./header.profile.scss";
import mainProfilePicture from "./profile1.jpeg";
import searchIcon from "./mag.png";
import addFriendIcon from "./add.png";

function Header() {
  let [searchToggle, setSearchToggle] = useState(false);
  return (
    <>
      <div className="Header">
        <h1>친구</h1>
        {searchToggle === true ? (
          <input
            placeholder="검색"
            // onChange={(e) => {
            //   Search(chats, setChats, e.target.value);
            // }}
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
          <img
            src={addFriendIcon}
            alt="add"
            onClick={() => {
              alert("아직 개발중입니다!");
            }}
          ></img>
        </div>
      </div>
      <div className="MainProfile">
        <img src={mainProfilePicture} alt="MainProfilePic" />
        <div className="Info">
          <h1>박준열</h1>
          <p>누가 프론트가 쉽댔어! ! !</p>
        </div>
      </div>
    </>
  );
}

export default Header;
