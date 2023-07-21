import React, { useRef, useState } from "react";

const AddBlog = () => {
  const formRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data from the refs
    const formData = {
      title: formRef.current.title.value,
      description: formRef.current.description.value,
      post: formRef.current.post.value,
      category: formRef.current.category.value,
      image: selectedImage,
    };

    //console logged formData
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-2">
      <div className="max-w-sm mx-auto my-24 bg-[#343432] px-5 py-10 rounded shadow-xl">
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl ">Write it out!</h1>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mt-5">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="block w-full p-2 border-2 rounded  border-[#7ea4f7] text-[#010101]"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              className="block w-full p-2 border-2 rounded border-[#7ea4f7] text-[#010101]"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="post">Post</label>
            <textarea
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
          <div className="mt-8">
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
          )}
          <div className="mt-10">
            <input
              type="submit"
              value="Login"
              className="py-3 bg-[#7ea4f7] hover:bg-[#5873ad] rounded text-white text-center w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
