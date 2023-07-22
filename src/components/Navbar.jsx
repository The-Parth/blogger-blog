import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Button } from "./containers/Button";
import { NavLinkUnderlined } from "./containers/NavLinkUnderlined";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
    window.location.reload(false);
  };

  const links = [
    { to: "/tech", text: "Tech" },
    { to: "/business", text: "Business" },
    { to: "/sports", text: "Sports" },
    { to: "/about", text: "About" },
  ];

  return (
    <nav className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <NavLink
            to="/home"
            className="pr-4 "
            onClick={() => setMenuOpen(false)}
          >
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
          {!localStorage.getItem("token") ? (
            <div className="flex gap-2">
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
          ) : (
            <div>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
        </div>
        <div className="md:hidden flex ">
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
        // mapped links
        <div className="md:hidden text-white text-center pt-2">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="block my-2 mx-2"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {link.text}
            </NavLink>
          ))}

          {!localStorage.getItem("token") ? (
            <>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="block my-2 mx-2"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="block my-2 mx-2 "
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                Signup
              </NavLink>
            </>
          ) : (
            <NavLinkUnderlined onClick={handleLogout}>Logout</NavLinkUnderlined>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
