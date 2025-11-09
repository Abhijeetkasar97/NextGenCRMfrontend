import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import ChartCard from '../components/ChartCard';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LeadsByStatusChart = ({ data }) => {
  const chart = (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="status"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );

  return <ChartCard title="Leads by Status" chart={chart} />;
};

export default LeadsByStatusChart;
