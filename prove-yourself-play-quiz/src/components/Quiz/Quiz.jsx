import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const {questions} = quiz.data;
    
    return (
        <div>
            {
             questions.map(q => <Question
             key={q.id}
             q={q}
             ></Question>)
            }
        </div>
    );
};

export default Quiz;