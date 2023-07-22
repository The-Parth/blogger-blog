import React,{useContext,useEffect} from "react"
import Carditem from "./Carditem";
import BlogContext from "../../context/blog/blogcontext";



const Card = () => {

  const {blog}=useContext(BlogContext);
  return (
    <div className="flex">
      {blog.map((n)=>{
        return(
          <div>
            <Carditem 
              Url="https://images.theconversation.com/files/182925/original/file-20170822-30538-gebk45.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              title={n.title}
              content={n.post}
            />
          </div>
        )
      })}
    </div>
  );
};
export default Card;
