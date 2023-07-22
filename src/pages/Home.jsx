import React, { useContext,useEffect } from "react";
import Hero from "../components/Hero";
import Card from "../components/containers/Card";
import BlogContext from "../context/blog/blogcontext";
import { Footer } from "../components/containers/Footer";

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
        <Footer />
      </container>
    </div>
  );
};

export default Home;
