import React, { useState } from "react";
import BlogContext from "./blogcontext";

const BlogState = (props) => {
    let initialBlog = [];
    const [blog, setBlog] = useState([]);
    const host = "http://localhost:5000";
    const getBlogs = async () => {
        const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const data = await response.json();
        setBlog(data);
    };

    const getBlogsByCategory = async (category) => {
        //console.log(category);
        const response = await fetch(`${host}/api/blogs/fetchcategory/${category}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const data = await response.json();
        setBlog(data);
    };

    const addBlogs = async (title, description, post, category) => {
        const response = await fetch(`${host}/api/blogs/addblogs`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, post, category }), // body data type must match "Content-Type" header
        });
        const Data = await response.json();
        console.log(Data);
        setBlog(blog.concat(Data));
    };

    const delBlogs = () => {};

    return (
        <BlogContext.Provider value={{ getBlogs, getBlogsByCategory, addBlogs, delBlogs, blog }}>
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogState;
