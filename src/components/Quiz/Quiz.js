import React from 'react';
import Option from '../Option/Option';

const Quiz = ({quiz}) => {
    console.log(quiz);
    // const [question, options , id ]= quiz ;
    return (
        <div className='border   rounded-lg p-10 w-96'>
            <h1><span>Question:{quiz.question}</span></h1>

            <div className=''>
            {
                quiz.options.map( option => <Option
                    id= {quiz.id}
                    key= {option}
                    option={option} 
                ></Option>)
            }
            </div>
        </div>
    );
};

export default Quiz;