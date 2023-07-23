import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./404";

const Blog = () => {
    const params = useParams();
    const { id } = params;
    if (id.length < 21 && id.length > 26) {
        return <PageNotFound />;
    }
    
};

export default Blog;
