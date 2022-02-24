import React, { useState } from "react";
import { AiOutlineStar , AiFillStar, AiOutlineDelete } from 'react-icons/ai';

function AddFriend() {
  const [friends, setFriends] = useState([
    {id:1 , name:"John" , star:true},
    {id:2 , name:"Mary", star:true},
    {id:3 , name:"Peter" , star:false},
  ]);

  const [friend , setFriend] = useState('')

  const addFriend = (e) => {
    e.preventDefault()
    setFriends([...friends, {id:friends.length + 1 , name:friend , star:false}])
    console.log(friends);
    setFriend('')
  };

  const toggleFavourite = (id) => {
    setFriends(friends.map(friend => friend.id === id ? {...friend , star:!friend.star} : friend))
  }

  const deleteFriend = (id) => {
    setFriends(friends.filter(friend => friend.id !== id))
  }

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
      <section className="friends">
        {friends &&
          friends.map((friend) => 
              <div key={friend.id} className="friend-card">
                <p>{friend.name}</p>
                <p onClick={()=>toggleFavourite(friend.id)}>{friend.star ? <AiFillStar/> : <AiOutlineStar />}</p>
                <p onClick={()=>deleteFriend(friend.id)}><AiOutlineDelete/></p>
              </div>)}
      </section>
    </section>
  );
}

export default AddFriend;
