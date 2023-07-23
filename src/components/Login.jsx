import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./containers/Button";

const Login = () => {
  const navigate = useNavigate();
  const [Auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("https://blogger-back.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: Auth.email, password: Auth.password }),
    });
    const Data = await response.json();
    if (Data.success) {
      localStorage.setItem("token", Data.token);
      navigate("/");
      window.location.reload(false); //lmao ded
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-start h-screen ">
      <div className="bg-[#343432] p-8 rounded-lg shadow-lg w-auto mt-8 mx-10">
        <form>
          <div className="mr-1 ml-1 mt-4 ">
            <input
              className=" w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mr-1 ml-1 mt-4 ">
            <input
              className=" w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mt-4 text-center">
            <Button onClick={handleClick}>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
