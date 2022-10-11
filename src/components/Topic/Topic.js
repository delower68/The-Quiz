import React from 'react';

const Topic = ({topic}) => {
    // const [id , logo,name ] = topic
    return (
        <div className=' font-bold    rounded-xl p-3 dark:bg-gray-800 text-gray-100 '>
            <img className='h-64 w-full' src={topic.logo} alt="" />
            <h1 className='text-2xl'>{topic.name}</h1>
            <div className='flex'>
            <h3>Total: {topic.total}</h3>
            <button className='text-justify rounded-lg p-1 ml-16 dark:bg-zinc-700'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Topic;