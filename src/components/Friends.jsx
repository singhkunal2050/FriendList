import React, { useContext } from "react";
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from "react-icons/ai";

import { FriendsContext } from "../contexts/friendsContext";
function Friends() {
  const { friends, setFriends, search, setSearch } = useContext(FriendsContext);

  const toggleFavourite = (id) => {
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, star: !friend.star } : friend
      ).sort(function (x, y) {
        return (x.star === y.star) ? 0 : x.star ? -1 : 1;
      })
    );
  };

  const deleteFriend = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  return (
    <section className="friends">
      {friends && !search
        ? friends.map((friend) => (
            <div key={friend.id} className="friend-card">
              <p>{friend.name}</p>
              <p onClick={() => toggleFavourite(friend.id)}>
                {friend.star ? <AiFillStar /> : <AiOutlineStar />}
              </p>
              <p onClick={() => deleteFriend(friend.id)}>
                <AiOutlineDelete />
              </p>
            </div>
          ))
        : friends
            .filter((friend) =>
              friend.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((friend) => (
              <div key={friend.id} className="friend-card">
                <p>{friend.name}</p>
                <p onClick={() => toggleFavourite(friend.id)}>
                  {friend.star ? <AiFillStar /> : <AiOutlineStar />}
                </p>
                <p onClick={() => deleteFriend(friend.id)}>
                  <AiOutlineDelete />
                </p>
              </div>
            ))}
    </section>
  );
}

export default Friends;
