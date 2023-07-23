import React, { useContext } from "react";
import Carditem from "./Carditem";
import BlogContext from "../../context/blog/blogcontext";

const Card = () => {
  const { blog } = useContext(BlogContext);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blog.map((n, index) => (
          <div
            key={index}
            className="flex items-stretch transition-transform transform hover:scale-105"
          >
            <Carditem
              newid={n._id}
              Url={
                n.image
                  ? n.image
                  : "https://images.theconversation.com/files/182925/original/file-20170822-30538-gebk45.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              }
              title={n.title}
              description={n.description}
              content={n.post}
              user={n.user}
              id={n._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
