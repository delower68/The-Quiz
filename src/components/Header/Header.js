import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link to="/"> 
           <h1  className="flex items-center font-bold text-3xl">The Quiz</h1>
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link
                
                to="/home"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                
                to="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Topics
              </Link>
            </li>
            <li className="flex">
              <Link
                
                to="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Statistic
              </Link>
            </li>
            <li className="flex">
              <Link
                
                to="/blog"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Blog
              </Link>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
