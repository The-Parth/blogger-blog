import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Button } from "./containers/Button";
import { NavLinkUnderlined } from "./containers/NavLinkUnderlined";
import "../App.css";

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
            <NavLinkUnderlined to="/tech">Tech</NavLinkUnderlined>
            <NavLinkUnderlined to="/business">Business</NavLinkUnderlined>
            <NavLinkUnderlined to="/sports">Sports</NavLinkUnderlined>
            <NavLinkUnderlined to="/about">About</NavLinkUnderlined>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center  text-white gap-x-4">
          <NavLink to="/create">
            <Button>
              {" "}
              <i class="fa-solid fa-circle-plus pr-2 text-blue-500 transition ease-in group-hover:text-white group-hover:duration-200"></i>
              Create
            </Button>
          </NavLink>
          <NavLink
            to="/login"
            className="text-white hover:text-[#7ea4f7] transition underline-animation"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="text-white hover:text-[#7ea4f7] transition underline-animation"
          >
            Signup
          </NavLink>
        </div>
        <div className="md:hidden flex">
          <NavLink to="/create">
            <Button>
              {" "}
              <i class="fa-solid fa-circle-plus pr-2 text-blue-500 transition ease-in group-hover:text-white group-hover:duration-200"></i>
              Create
            </Button>
          </NavLink>
          <button
            className="fa-solid fa-bars mx-2 fa-2xl ml-3"
            onClick={() => setMenuOpen(!isMenuOpen)}
          ></button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden text-white text-center pt-2">
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
