import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
 


const Quizs = () => {
    const loadQuiz = useLoaderData().data;
    return (
        <div>
            
            <div className='w-full  p-7 dark:bg-slate-600 text-gray-100 flex justify-center'>Quiz of {loadQuiz.name}</div>
            
            <div className='grid  md:grid-cols-3 sm:grid-cols-1 w-full  dark:bg-gray-700 text-gray-100'>
            
            {
            loadQuiz.questions.map(quiz => <Quiz
                 key={quiz.id}
                 quiz={quiz}
                 >
                 </Quiz>)
            }
            
        </div>
        </div>
    );
};

export default Quizs;