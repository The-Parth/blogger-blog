import React from "react";
import "../../App.css";

export const Footer = () => {
  return (
    <footer className="flex shadow bg-[#343432] bottom-0 w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-2">
        <div className="sm:flex sm:items-center sm:justify-center text-center">
          <a
            href="https://www.linkedin.com/company/csi---kjsce-student's-chapter/"
            className="flex items-center mb-2 sm:mb-0"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Made with
              <i className="fa-solid fa-heart fa-lg text-red-600 mx-1"></i>
              by Tech Team, CSI-KJSCE.
            </span>
          </a>
        </div>
        <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 . No Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
