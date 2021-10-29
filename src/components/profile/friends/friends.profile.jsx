import React, { useState } from "react";
import Data from "./friends";
import "./friends.profile.scss";

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
      <p>친구들</p>
      {friendsList.map((friend, i) => {
        return (
          <Friend
            key={i}
            id={friend.id}
            name={friend.name}
            description={friend.description}
            img={friend.img}
          />
        );
      })}
    </div>
  );
}

export default Friends;
