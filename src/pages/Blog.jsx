import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./404";

const Blog = () => {
    const params = useParams();
    const { id } = params;
    if (id.length < 21 && id.length > 26) {
        return <PageNotFound />;
    }
    const getOneBlog=async(blogid)=>{
        const response= await fetch(`http://localhost:5000/api/blogs/getblog/${id}`);
        const data=await response.json();
        console.log(data);
    }
    
    
    
};

export default Blog;
