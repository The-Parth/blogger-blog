import React, { useState, useEffect } from "react";

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Load the number of likes and liked status from localStorage for this specific id
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(`likeData_${id}`));
    if (storedData) {
      setLiked(storedData.liked);
      setLikeCount(storedData.likeCount);
    }
  }, [id]);

  const handleLike = () => {
    // Check if the user has already liked the post
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
    if (likedPosts.includes(id)) {
      return; // If already liked, don't do anything
    }

    // Mark the post as liked for the current user
    localStorage.setItem("likedPosts", JSON.stringify([...likedPosts, id]));

    // Update like count and set 'liked' to true
    const newLikeCount = likeCount + 1;
    setLiked(true);
    setLikeCount(newLikeCount);

    // Save the updated like data to localStorage for this specific id
    localStorage.setItem(
      `likeData_${id}`,
      JSON.stringify({ liked: true, likeCount: newLikeCount })
    );
  };

  return (
    <div className="bottom-0">
      <div className="flex items-center gap-2 m-2">
        <button onClick={handleLike} className="text-xl text-white">
          <i
            className={`fa-solid fa-heart  ${
              liked ? "text-red-600" : "text-white"
            }`}
          ></i>
        </button>
        <span>{likeCount} likes</span>
      </div>
    </div>
  );
};

export default LikeButton;
