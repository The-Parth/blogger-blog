import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import { useNavigate } from "react-router-dom";

const BlogPage = ({ title, description, post, user, id, image }) => {
    const host = "http://localhost:5000";
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
        <div className="w-full max-w-sm rounded overflow-hidden shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] m-4 cursor-pointer">
            <div className="w-full aspect-[1.33] relative group">
                <img
                    className="w-full object-cover h-full"
                    src={
                        image
                            ? image
                            : "https://images.theconversation.com/files/182925/original/file-20170822-30538-gebk45.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                    }
                    alt={title}
                />
                <div className="flex items-end justify-end absolute bottom-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity z-9">
                    <LikeButton title={title} />
                </div>
            </div>

            <div className="px-6 py-4 bg-[#031130] h-[100%] w-full">
                <div className="font-bold text-xl mb-2 pt-4 break-words">
                    {title}
                </div>
                <p className="text-[#7ea4f7] text-base pb-4 break-words">
                    {description}
                </p>
                <p className="text-[#7ea4f7] text-base pb-4 break-words">
                    {post}
                </p>
                <p className="text-gray-400 text-xs">- by {userobj.name}</p>
            </div>
        </div>
    );
};

export default BlogPage;
