import React from "react";
import "./header.profile.scss";
import mainProfilePicture from "./profile1.jpeg";
import searchIcon from "./mag.png";
import addFriendIcon from "./add.png";

function Header() {
  return (
    <>
      <div className="Header">
        <h1>친구</h1>
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            alert("아직 개발중입니다!");
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
