import React from "react";

export const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick ? props.onClick : null}
        className={`group rounded-lg px-4 py-2 text-xl transition ease-in border border-[#7ea4f7] text-blue-100 hover:bg-[#7ea4f7] duration-200 hover:text-[#031130] font-bold hover:border-white ${props.className}`}
      >
        {props.children}
      </button>
    </div>
  );
};
