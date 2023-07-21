import React from "react";

const Tech = () => {
  let form_ls = [];
  form_ls.push(
    <>
      <div className="container mx-auto p-2">
        <div className="max-w-sm mx-auto my-24 bg-[#343432] px-5 py-10 rounded shadow-xl">
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl ">Write it out!</h1>
          </div>
          <form action="#">
            <div className="mt-5">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="block w-full p-2 border-2 rounded  border-[#7ea4f7] text-[#010101]"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
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
                className="block w-full p-2 border-2 rounded border-[#7ea4f7]"
              >
                <option value="business">Business</option>
                <option value="sports">Sports</option>
                <option value="tech">Tech</option>
              </select>
            </div>
            <div className="mt-10">
              <input
                type="submit"
                defaultValue="Login"
                className="py-3 bg-[#7ea4f7] hover:bg-[#5873ad] rounded text-white text-center w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
  return form_ls;
};

export default Tech;
