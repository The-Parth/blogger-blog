import React from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  const { id } = params;
  return <div>Blog Name: {id}</div>;
};

export default Blog;
