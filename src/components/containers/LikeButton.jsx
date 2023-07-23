import React, { useState } from "react";

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    console.log({ id, liked: !liked });
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
      </div>
    </div>
  );
};

export default LikeButton;
