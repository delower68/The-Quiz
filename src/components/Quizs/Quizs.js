import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const loadQuiz = useLoaderData().data

    // console.log(loadQuiz);
    return (
        <div>
            <h1>hello</h1>
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