import React, { useContext,useEffect } from "react";
import Hero from "../components/Hero";
import Card from "../components/containers/Card";
import BlogContext from "../context/blog/blogcontext";

const Tech = () => {

  const {getBlogsByCategory}=useContext(BlogContext);
  useEffect(() => {
    getBlogsByCategory('tech');
  }, [])

  return (
    <div>
      <container>
        <h1 className="text-center text-4xl font-bold">Technology</h1>
        <Card/>
      </container>
    </div>
  );
};

export default Tech;