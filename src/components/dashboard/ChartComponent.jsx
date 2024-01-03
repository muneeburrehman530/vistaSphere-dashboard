import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Typography, Box } from "@mui/material";

const ChartComponent = () => {
  const zigzagData = [
    { x: "A", y: 10 },
    { x: "B", y: 20 },
    { x: "C", y: 5 },
    { x: "D", y: 25 },
    { x: "E", y: 12 },
    { x: "F", y: 18 },
    // Add more data points with varying y values
  ];

  return (
    <Box marginTop={"1rem"}>
      <Typography variant="h6" gutterBottom>
        Chart with background
      </Typography>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={zigzagData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="y"
            stroke="#5F00D9"
            fill="#5F00D9"
            fillOpacity={0.15}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ChartComponent;
