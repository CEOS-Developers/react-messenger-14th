import React, { useState } from "react";
import searchIcon from "./mag.png";

function Header({ onSearchChange }) {
  let [searchToggle, setSearchToggle] = useState(false);

  return (
    <div className="Header">
      <h1>채팅</h1>
      {searchToggle === true ? (
        <input placeholder="검색" onChange={onSearchChange} />
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
