import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinkUnderlined = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="text-white hover:text-[#7ea4f7] transition underline-animation"
    >
      {children}
    </NavLink>
  );
};
