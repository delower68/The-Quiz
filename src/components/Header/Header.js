import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 text-gray-100 ">
        <div className="container flex justify-between h-16 mx-auto">
          <div
            onClick={() => setOpen(!open)}
            className="h-6 w-6 text-left dark:bg-gray-800 md:hidden"
          >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </div>
          <Link to="/">
            <h1 className="flex items-center font-bold text-3xl">The Quiz</h1>
          </Link>
          <ul className={`items-stretch  absolute duration-500 ease-in md:static md:flex ${open ? 'top-9 left-[20px]' : 'top-[-120px] left-[20px]'}`}>
            <li className="flex ">
              <Link
                to="/home"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/topics"
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
        </div>
      </header>
    </div>
  );
};

export default Header;
