import React, { useState } from "react";
import "./like.css";

function LikeButton() {
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);
   return (
      <button
         className={`like-button ${liked ? 'liked' : ''}`}
         onClick={() => {
            setLiked(true);
         }}
      >
         <a class="fa-solid fa-heart fa-lg group-hover:bg-white"></a>
      </button>
   );
}
export default LikeButton;