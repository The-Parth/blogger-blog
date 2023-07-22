import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Button } from "./containers/Button";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="flex justify-between items-center  ">
        <div className="flex items-center ">
          <NavLink to="/home" className="pr-4">
            <img src={Logo} className="h-10 w-10 rounded-full" alt="Logo" />
          </NavLink>
          <div className="hidden md:flex text-white gap-x-4">
            <NavLink to="/tech">Tech</NavLink>
            <NavLink to="/business">Business</NavLink>
            <NavLink to="/sports">Sports</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center  text-white gap-x-4">
          <NavLink to="/create">
            <Button>
              {" "}
              <i class="fa-solid fa-circle-plus pr-2 text-blue-500 group-hover:text-white"></i>
              Create
            </Button>
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
        <div className="md:hidden">
          <NavLink to="/create" className="mx-2">
            Create
          </NavLink>
          <button
            className="fa-solid fa-bars mx-2 fa-2xl"
            onClick={() => setMenuOpen(!isMenuOpen)}
          ></button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden text-white text-center p-4">
          <NavLink to="/tech" className="block my-2 mx-2">
            Tech
          </NavLink>
          <NavLink to="/business" className="block my-2 mx-2">
            Business
          </NavLink>
          <NavLink to="/sports" className="block my-2 mx-2">
            Sports
          </NavLink>
          <NavLink to="/about" className="block my-2 mx-2">
            About
          </NavLink>
          <NavLink to="/login" className="block my-2 mx-2">
            Login
          </NavLink>
          <NavLink to="/signup" className="block my-2 mx-2">
            Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
