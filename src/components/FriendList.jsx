import React, { useState , useContext } from "react";
import AddFriend from "./AddFriend";
import Friends from "./Friends";
import Header from "./Header";
import { FriendsContext } from "../contexts/friendsContext";

function FriendList() {

  const [friends, setFriends] = useState([
    { id: 1, name: "John", star: true },
    { id: 2, name: "Mary", star: false },
    { id: 3, name: "Peter", star: false },
  ]);
  const [friend, setFriend] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="friend-list">
      <FriendsContext.Provider value={{friend, setFriend, friends, setFriends , search, setSearch}}>
        <Header />
        <AddFriend />
        <Friends />
      </FriendsContext.Provider>
    </div>
  );
}

export default FriendList;
