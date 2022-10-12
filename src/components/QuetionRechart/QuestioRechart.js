import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../Rechart/Rechart';

const QuestioRechart = () => {
    // const {total}= rechart  
    const loadForRechart = useLoaderData()
    // console.log(loadForRechart.data);
    return (
        <div>
            {
                loadForRechart.data.map(rechart => <Rechart
                    rechart= {rechart}
                ></Rechart>)
            }
        </div>
    );
};

export default QuestioRechart;