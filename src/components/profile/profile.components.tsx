import React, { useState } from "react";
import Data from "./friends";
import Header from "./header/header.profile";
import Friends from "./friends/friends.profile";

function Profile() {
  let [friendsList, setFriendsList] = useState(Data);
  let [searchData, setSearchData] = useState("");
  let tempFriendsList = friendsList.filter(
    (friend) =>
      friend.name.includes(searchData) ||
      friend.description.includes(searchData)
  );
  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchData(e.target.value);
  }

  return (
    <div className="Profile">
      <Header onSearchChange={onSearchChange} />
      <hr />
      <Friends friendsList={tempFriendsList} />
    </div>
  );
}

export default Profile;
