import React, { useContext,useEffect } from "react";
import Hero from "../components/Hero";
import Card from "../components/containers/Card";
import BlogContext from "../context/blog/blogcontext";

const Business = () => {

  const {getBlogsByCategory}=useContext(BlogContext);
  useEffect(() => {
    getBlogsByCategory('business');
  }, [])

  return (
    <div>
      <container>
        <h1 className="text-center text-4xl font-bold">Business</h1>
        <Card/>
      </container>
    </div>
  );
};

export default Business;