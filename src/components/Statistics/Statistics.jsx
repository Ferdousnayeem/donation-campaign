import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Utilities/utilities";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  const donations = useLoaderData();

  const [storedDonations, setStoredDonations] = useState([]);

  useEffect(() => {
    const storedData = getStoredDonations();
    setStoredDonations(storedData);
  }, []);

  const data = [
    { name: "Total Donations", value: donations.length },
    { name: "Your Donations", value: storedDonations.length }
  ];

  const COLORS = ["#ef4444", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center">
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            ></Cell>
          ))}
        </Pie>
      </PieChart>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-3">
            <p className="text-lg font-normal">Your Donation </p> <p className="w-32 h-3 bg-cyan-400"></p>
        </div>
        <div className="flex justify-center items-center gap-3">
            <p className="text-lg font-normal">Total Donation </p> <p className="w-32 h-3 bg-red-500"></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
