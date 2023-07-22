import React, { useState } from 'react'
import BlogContext from './blogcontext'

const BlogState = (props) => {
    
    let initialBlog=[]
    const [blog, setBlog] = useState([])
    const host="http://localhost:5000"
    const getBlogs= async ()=>{
        const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmI5ZWVkNjIxODUzYjUzMzZmNWMyYyIsImlhdCI6MTY5MDAxNzU4MX0.DvH4R8QMXdI55-91mzaeo7M0yRjn1lN23da0otH_hkY"
            },
          });
          const data= await response.json();
          setBlog(data)
        }

    const addBlogs =async (title,description,post)=>{
            const response = await fetch(`${host}/api/blogs/addblogs`, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmI5ZWVkNjIxODUzYjUzMzZmNWMyYyIsImlhdCI6MTY5MDAxNzU4MX0.DvH4R8QMXdI55-91mzaeo7M0yRjn1lN23da0otH_hkY"
              },
              body: JSON.stringify({title,description,post}), // body data type must match "Content-Type" header
            });
            const Data=await response.json();
            console.log(Data);
            setBlog(blog.concat(Data));
          }

    const delBlogs=()=>{
        
    }
    
  return (
    <BlogContext.Provider value={{getBlogs,addBlogs,delBlogs,blog}}>
        {props.children}
    </BlogContext.Provider>
  )
}

export default BlogState;