import React from 'react';
import { useLoaderData } from "react-router-dom";
import Topic from './../Topic/Topic';
import './Topics.css';
import Header from './../Header/Header';
const Topics = () => {
    const quizTopics = useLoaderData();
    const {data} = quizTopics;
    
    return (
        <div className="mb-7">
            <div>
                <Header></Header>
            </div>
            <div id="topics-item" className="grid grid-cols-2 gap-5">
                {
                    data.map(topic => <Topic
                    key ={topic.id}    
                    topic ={topic}></Topic>)
                }
            </div>
        </div>
      
    );
};

export default Topics;