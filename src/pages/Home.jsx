import React, { useContext,useEffect } from "react";
import Hero from "../components/Hero";
import Card from "../components/containers/Card";
import BlogContext from "../context/blog/blogcontext";

const Home = () => {

  const {getBlogs}=useContext(BlogContext);
  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <div>
      <container>
        <Hero />
        <Card/>
      </container>
    </div>
  );
};

export default Home;
