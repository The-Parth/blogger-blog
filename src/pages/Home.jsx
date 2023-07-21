import React from "react";
import Hero from "../components/Hero";
import Card from "../components/containers/Card";

const Home = () => {
  return (
    <div>
      <container>
        <Hero />
        <Card
          Url="https://images.theconversation.com/files/182925/original/file-20170822-30538-gebk45.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          alt="Hi My name is Atharva"
          title="Parth is a bully"
          content="Parth is so atrociously stunning and dumb as the same time that I feel like killing him down to the last drop of blood"
        ></Card>
      </container>
    </div>
  );
};

export default Home;
