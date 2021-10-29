import React from "react";
import Header from "./header/header.profile";
import Friends from "./friends/friends.profile";

function Profile() {
  return (
    <div className="Profile">
      <Header />
      <hr />
      <Friends />
    </div>
  );
}

export default Profile;
