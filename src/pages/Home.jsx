import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import Card from "../components/containers/Card";
import BlogContext from "../context/blog/blogcontext";
import { Footer } from "../components/containers/Footer";

const Home = () => {
  const { getBlogs } = useContext(BlogContext);
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Hero />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
