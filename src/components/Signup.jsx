import React from "react";
import { Button } from "./containers/Button";

const Signup = () => {
  return (
    <div className="flex justify-center items-start h-screen ">
      <div className="bg-[#343432] p-4 rounded-lg shadow-lg w-auto mt-8 mx-10">
        <form>
          <div className="mr-1 ml-1 mt-4 ">
            <input
              className=" w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm"
              name="name"
              placeholder="Name"
            ></input>
          </div>
          <div className="mr-1 ml-1 mt-4 ">
            <input
              className=" w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm"
              type="email"
              name="email"
              placeholder="email"
            ></input>
          </div>
          <div className="mr-1 ml-1 mt-4 ">
            <input
              className=" w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm"
              type="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="mt-4 text-center">
            <Button>Signup</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
