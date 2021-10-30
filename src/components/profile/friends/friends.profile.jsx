import React, { useState } from "react";
import Data from "./friends";
import "./friends.profile.scss";

import { Link } from "react-router-dom";

function Friend({ id, name, description, img }) {
  return (
    <div className="Friend">
      <img src={img} alt={id}></img>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Friends() {
  let [friendsList, setFriendsList] = useState(Data);
  return (
    <div className="List">
      <p style={{ marginLeft: "25px" }}>친구 {friendsList.length}</p>
      {friendsList.map((friend, i) => {
        return (
          <Link
            to={`/chatroom/${friend.id}`}
            style={{ textDecoration: "none", color: "Black" }}
          >
            <Friend
              key={i}
              id={friend.id}
              name={friend.name}
              description={friend.description}
              img={friend.img}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Friends;
