import React from "react";
import LikeButton from "./LikeButton";

const Carditem = ({ Url, content, alt, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] m-4 ">
      <img className="w-full" src={Url} alt={alt} />

      <div class="px-6 py-4h-10  bg-[#031130] h-[100%]">
        <div className="font-bold text-xl mb-2 pt-4">{title}</div>
        <p className="text-[#7ea4f7] text-base pb-4 ">{content}</p>
        <LikeButton/>
      </div>
    </div>
  );
};

export default Carditem;
