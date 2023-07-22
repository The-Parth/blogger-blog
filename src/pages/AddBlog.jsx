import React, { useRef,useState } from "react";

const AddBlog = () => {
  const formRef = useRef(null);
  //   const [selectedImage, setSelectedImage] = useState(null);

  //   const handleFileChange = (event) => {
  //     const selectedFile = event.target.files[0];
  //     setSelectedImage(selectedFile);
  //   };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Get form data from the refs
  //   const formData = {
  //     title: formRef.current.title.value,
  //     description: formRef.current.description.value,
  //     post: formRef.current.post.value,
  //     category: formRef.current.category.value,
  //     //   image: selectedImage,
  //   };

  //   //console logged formData
  //   console.log(formData);
  //   formRef.current.title.value = "";
  //   formRef.current.description.value = "";
  //   formRef.current.post.value = "";
  //   formRef.current.category.value = "";
  //   // setSelectedImage(null);
  // };
  const [newBlog, setNewBlog] = useState({
    title:"",
    description:"",
    post:""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setNewBlog((prevValues)=>{
      return({
        ...prevValues,
        [name]:value,
      })
    })
  }

  const handleClick=(e)=>{
    e.preventDefault();
    console.log(newBlog)
  }


  return (
    <div className="container mx-auto p-2">
      <div className="max-w-sm mx-auto my-24 bg-[#343432] px-5 py-10 rounded shadow-xl">
        <div className="text-center mb-8">
          <h1 className="font-bold text-4xl ">Write it out!</h1>
        </div>
        <form ref={formRef} onSubmit={handleClick}>
          <div className="mt-5">
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              id="title"
              className="block w-full p-2 border-2 rounded  border-[#7ea4f7] text-[#010101]"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="description">Description</label>
            <input
              onChange={handleChange}
              name="description"
              type="text"
              id="description"
              className="block w-full p-2 border-2 rounded border-[#7ea4f7] text-[#010101]"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="post">Post</label>
            <textarea
              onChange={handleChange}
              name="post"
              id="post"
              rows="8"
              className="block w-full p-2 border-2 rounded border-[#7ea4f7] text-[#010101] resize-none"
            />
          </div>
          <div className="mt-4 text-[#010101]">
            <label htmlFor="category " className="text-white">
              Category
            </label>
            <select
              id="category"
              className="block w-full p-2 border-2 rounded border-[#7ea4f7] "
            >
              <option value="business">Business</option>
              <option value="sports">Sports</option>
              <option value="tech">Tech</option>
            </select>
          </div>
          {/* <div className="mt-8">
            {selectedImage ? (
              <label
                htmlFor="image"
                className="py-2 px-3 ml-3 font-bold bg-green-500 rounded text-white cursor-pointer"
              >
                &#10004;
              </label>
            ) : (
              <>
                <label htmlFor="image">Add Image</label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden w-full p-2 border rounded border-gray-500"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="image"
                  className="py-2 px-3 ml-3 font-bold bg-[#7ea4f7] hover:bg-[#5873ad] rounded text-white cursor-pointer"
                >
                  +
                </label>
              </>
            )}
          </div>

          {selectedImage && (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="max-w-full h-auto rounded"
              />
            </div>
          )} */}
          <div className="mt-10 font-bold  ">
            <button
              // onClick={handleClick}
              type="submit"
              value="Submit"
              className="py-3 bg-[#7ea4f7] hover:bg-[#5873ad] hover:text-white rounded text-[#222]   text-center w-full ease-in duration-300 "
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
