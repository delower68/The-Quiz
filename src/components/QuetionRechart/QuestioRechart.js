import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuestioRechart = () => {
    // const {total}= rechart  
    const loadForRechart = useLoaderData()
    // console.log(loadForRechart.data);
    return (
        <div>
            {/* <h1>total: ${total}</h1> */}
        </div>
    );
};

export default QuestioRechart;