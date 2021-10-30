import React from "react";
import searchIcon from "./mag.png";

function Header() {
  return (
    <div className="Header">
      <h1>채팅</h1>
      <div className="Buttons">
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            alert("아직 개발중입니다!");
          }}
        ></img>
      </div>
    </div>
  );
}

export default Header;
