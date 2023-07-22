import React from "react";
import "../../App.css";

export const Footer = () => {
  return (
    <footer className=" flex shadow bg-[#343432] bottom-0 w-full fixed">
      <div className="w-full max-w-screen-xl mx-auto  md:py-2  ">
        <div className="sm:flex sm:items-center sm:justify-center">
          <a
            href="https://www.linkedin.com/company/csi---kjsce-student's-chapter/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Made with
              <i class="fa-solid fa-heart fa-lg text-red-600 mx-1"></i>
              by Tech Team, CSI-KJSCE.
            </span>
          </a>
          <figure className=" mix-blend-multiply ">
            <img
              src={require("../../assets/Csi-logo.png")}
              alt="CSI-KJSCE logo "
              className="h-12 mx-3 brightness-0 invert-0 "
            />
          </figure>
        </div>
        <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 . No Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
