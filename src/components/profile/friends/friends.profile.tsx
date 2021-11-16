import React, { useState } from "react";

import "./friends.profile.scss";

import { Link } from "react-router-dom";

type FriendProps = {
  id: string;
  name: string;
  description: string;
  img: string;
};

function Friend({ id, name, description, img }: FriendProps) {
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

type FriendsProps = {
  friendsList: any;
};

function Friends({ friendsList }: FriendsProps) {
  return (
    <div className="List">
      <p style={{ marginLeft: "25px" }}>친구 {friendsList.length}</p>
      {friendsList.map(
        (
          friend: {
            id: string;
            name: string;
            description: string;
            img: string;
          },
          i: React.Key | null | undefined
        ) => {
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
        }
      )}
    </div>
  );
}

export default Friends;
