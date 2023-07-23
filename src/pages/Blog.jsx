import React, {useState, useEffect } from "react";
import BlogPage from "../components/containers/BlogPage";
import { useParams } from "react-router-dom";
import PageNotFound from "./404";
import { useNavigate } from "react-router-dom";
import hostFunc from "../host";

const host = hostFunc();

const Blog = () => {
    const params = useParams();
    const { id } = params;

    const [blogObj, setBlogObj] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getBlog = async (blogid) => {
            try {
                const response = await fetch(
                    `${host}/api/blogs/getblog/${blogid}`,
                    {
                        method: "GET",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                            "auth-token": localStorage.getItem("token"),
                        },
                    }
                );
                const blogData = await response.json();
                setBlogObj(blogData);
                console.log(blogData);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        getBlog(id);
    }, [id]);

    return (
        <div>
            {blogObj ? (
                blogObj.error ? (
                    <PageNotFound />) : (
                    <div>
                        <BlogPage 
                            title = {blogObj.title}
                            description = {blogObj.description}
                            post = {blogObj.post}
                            user = {blogObj.user}
                            id = {blogObj._id}
                            image = {blogObj.image}
                        />
                    </div>
            ) ): (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-[#7ea4f7] border-b-6"></div>
                </div>
            )}
        </div>
    );
};

export default Blog;
