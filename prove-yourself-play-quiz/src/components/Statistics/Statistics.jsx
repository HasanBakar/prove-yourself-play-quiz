import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const topics = useLoaderData();
    const {data} = topics;
    return (
        <div>
            
        </div>
    );
};

export default Statistics;