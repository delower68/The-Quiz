import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const loadQuiz = useLoaderData().data

    // console.log(loadQuiz);
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 w-full mb-2 dark:bg-gray-700 text-gray-100'>
            
            {
            loadQuiz.questions.map(quiz => <Quiz
                 key={quiz.id}
                 quiz={quiz}
                 >
                 </Quiz>)
        }
        </div>
    );
};

export default Quizs;