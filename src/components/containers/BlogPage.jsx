import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import { useNavigate } from "react-router-dom";

const BlogPage = ({ title, description, post, user, id, image }) => {
    const host = "https://blogger-back.onrender.com";
    const [userobj, setUserObj] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getUsername = async (user) => {
            try {
                const response = await fetch(
                    `${host}/api/auth/userbyid/${user}`,
                    {
                        method: "GET",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                            "auth-token": localStorage.getItem("token"),
                        },
                    }
                );
                const userData = await response.json();
                setUserObj(userData);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        getUsername(user);
    }, [user]);

    if (!userobj) {
        // Return some loading UI or null while waiting for the user data
        return null;
    }
    const handleBig = (passid) => {
        navigate(`/blog/${passid}`);
    };

    return (
        <div
            className="flex items-center justify-center"
        >
            <div className="max-w-xl min-w-[60%] mx-4 rounded overflow-hidden shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] cursor-pointer">
                <img
                    className="w-full min-h-[20vh] h-full object-cover"
                    src={
                        image
                            ? image
                            : "https://images.theconversation.com/files/182925/original/file-20170822-30538-gebk45.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                    }
                    alt={title}
                />
                <div className="px-6 py-4 bg-[#031130]">
                    <div className="font-bold text-xl mb-2 pt-4 break-words text-center">
                        {title}
                    </div>
                    <p className="text-white text-base pb-4 break-words text-center">
                        {description}
                    </p>
                    <div className="text-[#7ea4f7] text-base pb-4 break-words text-left">
                        {post.split("\n").map((line, index) => (
                            <p key={index} className="mb-2">
                                {line}
                            </p>
                        ))}
                    </div>
                    <p className="text-gray-400 text-xs">- by {userobj.name}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
