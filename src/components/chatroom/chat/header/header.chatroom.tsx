import React from "react";
import "./header.chatroom.scss";

type HeaderProps = {
  id: number;
  name: string;
  img: string;
  userId: number;
  setUserId: Function;
};

function Header({ id, name, img, userId, setUserId }: HeaderProps) {
  let usericon = "/images/profile1.jpeg";

  let username = "";

  if (userId === 0) {
    username = "박준열";
    usericon = "/images/profile1.jpeg";
  } else {
    username = name;
    usericon = img;
  }

  return (
    <div
      className="header"
      onClick={() => {
        if (userId === 0) setUserId(id);
        else setUserId(0);
      }}
    >
      <img src={usericon} alt="profile" className="profile" />
      <div className="userinfo">
        <div className="username">{username}</div>
        <br />
        <div className="status">Online</div>
      </div>
    </div>
  );
}

export default Header;
