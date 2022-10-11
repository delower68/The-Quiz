import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";


const Home = () => {
    const topics = useLoaderData().data
    // console.log(topics);
    // const loadTopic= topics.data
    
    
  return (
    <div>
        
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-700 dark:text-gray-100 pb-9">
        
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://blog.hubspot.com/hubfs/google-quiz.jpg"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <Link
                
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                The Best Quiz here for you...!
              </Link>
              <p className="text-xs dark:text-gray-400">
                By-
                <Link
                  
                  href="#"
                  className="text-xs hover:underline"
                >
                  Delower Hossain
                </Link>
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>Select the Quiz category from the blow:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4  gap-3 sm:grid-cols-1 p-4 dark:bg-gray-700 text-gray-100 ">
      {
            topics.map(topic => <Topic
                 key={topic.id}
                 topic={topic}
                 >
                 </Topic>)
        }
        
      </div>
    </div>
  );
};

export default Home;
