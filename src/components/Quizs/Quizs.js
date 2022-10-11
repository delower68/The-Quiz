import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Option from '../Option/Option';


const Quizs = () => {
    const loadQuiz = useLoaderData().data
    return (
        <div>
            
            <div className='w-full  p-7 dark:bg-gray-700 text-gray-100 flex justify-center'>Quiz of {loadQuiz.name}</div>
            
            <div className='grid md:grid-cols-3 sm:grid-cols-1 w-full mb-2 dark:bg-gray-700 text-gray-100'>
            
            {
            loadQuiz.questions.map(quiz => <Quiz
                 key={quiz.id}
                 quiz={quiz}
                 >
                 </Quiz>)
            }
            {
            loadQuiz.questions.map(quiz => <Option
                 key={quiz.id}
                 quiz={quiz}
                 >
                 </Option>)
            }
        </div>
        </div>
    );
};

export default Quizs;