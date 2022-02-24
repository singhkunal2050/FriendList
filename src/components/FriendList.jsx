import React, { useState } from "react";
import AddFriend from "./AddFriend";
import Friends from "./Friends";
import { AiFillSmile } from 'react-icons/ai';

function FriendList() {
  return (
    <div className="friend-list">
      <header>
          <h2>Friendlist
            <AiFillSmile/>
          </h2>
          <div className="searchbox">
            <input type="text" className="search" placeholder="Search Friend"/>
          </div>
      </header>
      <AddFriend />
      <Friends />
    </div>
  );
}

export default FriendList;
