import React, { useContext, useState } from "react";
import { FriendsContext } from "../contexts/friendsContext";

function AddFriend() {
  const { friend, setFriend, friends, setFriends } = useContext(FriendsContext);

  const addFriend = (e) => {
    e.preventDefault();
    if (friend !== "") {
      setFriends([
        ...friends,
        { id: friends.length + 1, name: friend, star: false },
      ]);
      console.log(friends);
      setFriend("");
    }else{
      alert("Please enter a name");
    }
  };

  return (
    <section>
      <form onSubmit={addFriend}>
        <input
          type="text"
          placeholder="Add Friend"
          value={friend}
          onChange={(e) => setFriend(e.target.value)}
          className="add-friend-input"
        />
      </form>
    </section>
  );
}

export default AddFriend;
