import React from "react";
import "./sidebar.components.scss";
import chatIcon from "./messenger.png";
import userIcon from "./user.png";
import moreIcon from "./more.png";

import { Route, Switch, Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="sidenav">
        <Link to={`/profile`}>
          <img src={userIcon} className="user" alt="user" />
        </Link>
        <Link to={`/chatroom`}>
          <img src={chatIcon} className="chat" alt="chat" />
        </Link>
        <Link to={`/other`}>
          <img src={moreIcon} className="more" alt="more" />
        </Link>
      </div>
    </>
  );
}

export default SideBar;
