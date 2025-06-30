import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Activity = ({ tasks }) => {
  const data = [
    { name: "Total", count: tasks.length },
    { name: "Completed", count: tasks.filter((t) => t.completed).length },
    { name: "Pending", count: tasks.filter((t) => !t.completed).length },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">
      <h2 className="text-3xl text-white font-bold mb-6">📊 Activity Overview</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        className="bg-white shadow rounded p-4"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Activity;
