import React from 'react';
import Option from '../Option/Option';

const Quiz = ({quiz}) => {
    const {correctAnswer} = quiz
    // console.log(correctAnswer);  
    return (
        <div>
            
            <div className='border   rounded-lg p-10 w-96'>
            <h1><span>Question:{quiz.question}</span></h1>

            <div className=''>
            {
                quiz.options.map( option => <Option
                    id= {quiz.id}
                    key= {option}
                    correctAnswer= {correctAnswer}
                    option={option} 
                ></Option>)
            }
            
            </div>
        </div>
        </div>
    );
};

export default Quiz;