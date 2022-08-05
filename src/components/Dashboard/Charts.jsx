import * as React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Title from "./Title";


export default function Chart(props) {
  
  return (
    <React.Fragment>
      <Title>{props.timeLimit} Spending (Category-wise)</Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="category" scale="point" padding={{ left: 40, right: 20 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amountin$" fill="#1876d1" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
