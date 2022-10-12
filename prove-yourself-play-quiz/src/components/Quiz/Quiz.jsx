import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const {questions,name} = quiz.data;
    
    return (
        <div>
            <h1 className="text-center text-5xl my-5 font-bold" >Quiz of {name} </h1>
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