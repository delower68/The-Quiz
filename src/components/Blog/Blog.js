import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              to=""
              className="text-2xl font-bold hover:underline"
            >
              What is the purpose of React Router?
            </Link>
            <p className="mt-2">
            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              to="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </Link>
            
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              to=""
              className="text-2xl font-bold hover:underline"
            >
              How does context API work?
            </Link>
            <p className="mt-2">
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              to="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </Link>
            
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              to=""
              className="text-2xl font-bold hover:underline"
            >
              What is the useRef hook?
            </Link>
            <p className="mt-2">
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              to="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
