import React from "react";
import LikeButton from "./LikeButton";

const Carditem = ({ Url, content, alt, title, id }) => {
  return (
    <div className="w-full max-w-sm rounded overflow-hidden shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] m-4">
      <div className="w-full aspect-[1.33] relative group">
        <img className="w-full object-cover h-full" src={Url} alt={alt} />
        <div className="flex items-end justify-end absolute bottom-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
          <LikeButton title={title} id={id} />
        </div>
      </div>

      <div className="px-6 py-4 bg-[#031130] h-[100%] w-full">
        <div className="font-bold text-xl mb-2 pt-4 break-words">{title}</div>
        <p className="text-[#7ea4f7] text-base pb-4 break-words">{content}</p>
      </div>
    </div>
  );
};

export default Carditem;
