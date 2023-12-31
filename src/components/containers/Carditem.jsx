import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import { useNavigate } from "react-router-dom";
import hostFunc from "../../host";

const host = hostFunc();

const Carditem = ({ Url, content, alt, title, description, user, newid }) => {

  const [userobj, setUserObj] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsername = async (user) => {
      try {
        const response = await fetch(`${host}/api/auth/userbyid/${user}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const userData = await response.json();
        setUserObj(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUsername(user);
  }, [user]);

  if (!userobj) {
    return null;
  }

  const handleBig = (passid) => {
    navigate(`/blog/${passid}`);
  };

  const handleLikeClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="w-full max-w-sm rounded overflow-hidden shadow-[0_15px_80px_-25px_rgba(255,255,255,0.15)] m-4 cursor-pointer"
      onClick={() => {
        handleBig(newid);
      }}
    >
      <div className="w-full aspect-[1.33] relative group">
        <img className="w-full object-cover h-full" src={Url} alt={alt} />
        <div className="flex items-end justify-end absolute bottom-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity z-99999">
          <button onClick={handleLikeClick}>
            <LikeButton title={title} id={newid} />
          </button>
        </div>
      </div>

      <div className="px-6 py-4 bg-[#031130] h-[100%] w-full">
        <div className="font-bold text-xl mb-2 pt-4 break-words">{title}</div>
        <p className="text-[#7ea4f7] text-base pb-4 break-words">
          {description}
        </p>
        <p className="text-gray-400 text-xs">- by {userobj.name}</p>
      </div>
    </div>
  );
};

export default Carditem;
