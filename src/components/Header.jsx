import React, { useContext } from "react";
import { AiFillSmile } from 'react-icons/ai';
import { FriendsContext } from "../contexts/friendsContext";

function Header() {

  const { friend, setFriend, friends, setFriends ,  search, setSearch } = useContext(FriendsContext);

  return (
    <header>
      <h2>
        Friendlist
        <AiFillSmile />
      </h2>
      <div className="searchbox">
        <input type="text" className="search" placeholder="Search Friend" onChange={(e)=>{setSearch(e.target.value)}} />
      </div>
    </header>
  );
}

export default Header;
