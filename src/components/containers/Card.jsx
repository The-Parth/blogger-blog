import React, { useContext, useState, useEffect } from "react";
import Carditem from "./Carditem";
import BlogContext from "../../context/blog/blogcontext";

const Card = () => {
  const { blog } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous call (e.g., fetching data from an API)
    // Replace this with your actual API call if applicable
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Change the delay time as needed
  }, []);

  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-[#7ea4f7] border-b-6"></div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Card;
