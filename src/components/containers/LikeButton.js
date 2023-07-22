import React, { useState } from "react";
import "./like.css";
import {AiOutlineHeart} from "react-icons/ai"

function LikeButton() {
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);
   return (
      <button
         className={`like-button ${liked ? 'liked' : ''}`}
         onClick={() => {
            setLikes(AiOutlineHeart + 1);
            setLiked(true);
         }}
      >
         {AiOutlineHeart} <AiOutlineHeart></AiOutlineHeart>
      </button>
   );
}
export default LikeButton;