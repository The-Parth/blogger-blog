import React, { useContext, useRef, useState } from "react";

import BlogContext from "../context/blog/blogcontext";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const formRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [formErrors, setFormErrors] = useState({
    title: false,
    description: false,
    post: false,
    image: false,
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formValid = validateForm();
    if (!formValid) {
      return;
    }

    const formData = {
      title: formRef.current.title.value,
      description: formRef.current.description.value,
      post: formRef.current.post.value,
      category: formRef.current.category.value,
      image: selectedImage,
    };

    //console.log(formData);
    formRef.current.title.value = "";
    formRef.current.description.value = "";
    formRef.current.post.value = "";
    formRef.current.category.value = "";
    setSelectedImage(null);
    handleClick(event, formData.image);
    navigate("/");
  };
  const navigate = useNavigate();
  const { addBlogs } = useContext(BlogContext);
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    post: "",
    category: "business",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };
  const validateForm = () => {
    const errors = {
      title: newBlog.title.trim().length <= 3,
      description: newBlog.description.trim().length <= 5,
      post: newBlog.post.trim().length <= 5,

      image: selectedImage ? selectedImage.size > 1048576 : false,
    };

    setFormErrors(errors);

    // Check if any required field is empty
    return !Object.values(errors).some((error) => error);
  };

  const handleClick = (e, img) => {
    function imageFileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    // Usage example:
    async function getB64(myFile) {
      try {
        const file = myFile;
        if (!file) {
          return "";
        }

        // Check file size (1 MB = 1,048,576 bytes)

        const base64String = await imageFileToBase64(file);
        return base64String;
      } catch (error) {
        console.error("Error converting image to Base64:", error.message);
        return "";
      }
    }

    e.preventDefault();
    getB64(img).then((data) => {
      newBlog.image = data;
      console.log(newBlog);
      addBlogs(
        newBlog.title,
        newBlog.description,
        newBlog.post,
        newBlog.category,
        newBlog.image
      );
      navigate("/");
    });
  };

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
              className={`block w-full p-2 border-2 rounded  border-[#7ea4f7] ${
                formErrors.title ? "border-red-500" : "border-[#7ea4f7]"
              } text-[#010101]`}
              required
            />
            {formErrors.title && (
              <p className="text-red-500 mt-1">
                Title must be at least 3 characters long.
              </p>
            )}
          </div>
          <div className="mt-5">
            <label htmlFor="description">Description</label>
            <input
              onChange={handleChange}
              name="description"
              type="text"
              id="description"
              className={`block w-full p-2 border-2 rounded border-[#7ea4f7] ${
                formErrors.description ? "border-red-500" : "border-[#7ea4f7]"
              } text-[#010101]`}
              required
            />
            {formErrors.description && (
              <p className="text-red-500 mt-1">
                Description must be at least 5 characters long.
              </p>
            )}
          </div>
          <div className="mt-5">
            <label htmlFor="post">Post</label>
            <textarea
              onChange={handleChange}
              name="post"
              id="post"
              rows="8"
              className={`block w-full p-2 border-2 rounded border-[#7ea4f7] ${
                formErrors.post ? "border-red-500" : "border-[#7ea4f7]"
              } text-[#010101] resize-none`}
              required
            />
            {formErrors.post && (
              <p className="text-red-500 mt-1">
                Post must be at least 5 characters long.
              </p>
            )}
          </div>
          <div className="mt-4 text-[#010101]">
            <label htmlFor="category " className="text-white">
              Category
            </label>
            <select
              onChange={handleChange}
              name="category"
              id="category"
              className="block w-full p-2 border-2 rounded border-[#7ea4f7]"
              required
            >
              <option value="business">Business</option>
              <option value="sports">Sports</option>
              <option value="tech">Tech</option>
            </select>
          </div>

          <div className="mt-8">
            {selectedImage ? (
              <div className="flex items-center">
                {selectedImage.size > 1048576 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImage(null);
                    }}
                    className="py-2 px-3 ml-3 font-bold bg-red-500 rounded text-white cursor-pointer"
                  >
                    Delete
                  </button>
                ) : (
                  <>
                    <label htmlFor="image">Add Image</label>
                    {/* Rest of the "Add Image" button code... */}
                  </>
                )}
              </div>
            ) : (
              <>
                <label htmlFor="image">Add Image</label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden w-full p-2 border rounded border-gray-500"
                  onChange={handleFileChange}
                  required
                />

                <label
                  htmlFor="image"
                  className="py-2 px-3 ml-3 font-bold bg-[#7ea4f7] rounded text-white cursor-pointer inline-block group transition ease-in duration-300 hover:bg-[#5873ad]"
                >
                  <i className="fa-solid fa-plus fa-lg bg-[#7ea4f7] rounded text-[#222] group-hover:text-white transition ease-in duration-300"></i>
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
          {formErrors.image && (
            <p className="text-red-500 mt-1">Image should be less than 1MB.</p>
          )}
          <div className="mt-10 font-bold  ">
            <button
              onClick={handleSubmit}
              type="submit"
              value="Submit"
              className="py-3 bg-[#7ea4f7] hover:bg-[#5873ad] hover:text-white rounded text-[#222]   text-center w-full ease-in duration-300 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
