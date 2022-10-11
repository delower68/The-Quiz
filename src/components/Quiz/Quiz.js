import React from 'react';

const Quiz = ({quiz}) => {
    console.log(quiz);
    return (
        <div>
            <h1>quiz:{quiz.name}</h1>
        </div>
    );
};

export default Quiz;