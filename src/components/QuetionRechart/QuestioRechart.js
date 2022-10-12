import React from "react";
import { useLoaderData } from "react-router-dom";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const QuestioRechart = () => {
  // const {total}= rechart
  const loadForRechart = useLoaderData();
//   console.log(loadForRechart.data);
  return (
    <div>
      {/* <h3 className="flex justify-start text-lg  dark:bg-gray-700 dark:text-gray-100 font-bold py-3">
        Let's Quiz Analysis{" "}
      </h3> */}
      <div className="flex  dark:text-gray-700 py-5 justify-center">
        <LineChart
          className=""
          width={390}
          height={300}
          data={loadForRechart.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="name" stroke="#8884d8" />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default QuestioRechart;
