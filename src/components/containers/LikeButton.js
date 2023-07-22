import React, { useState } from "react";
import "./like.css";

function LikeButton() {
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);
   return (
      <div className="flex items-center">
         <div className="">
         <button
         className=""
         onClick={() => {
            setLiked(true);
         }}
      >
         <a class="fa-solid fa-heart fa-lg group-hover:bg-red-500"></a>
      </button>
      </div>
      <div>

      </div>
      </div>
      
   );
}
export default LikeButton;