import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinkUnderlined = ({ to, children, onClick }) => {
  return (
    <NavLink
      onClick={onClick ? onClick : null}
      to={to}
      className="text-white hover:text-[#7ea4f7] transition underline-animation"
    >
      {children}
    </NavLink>
  );
};
