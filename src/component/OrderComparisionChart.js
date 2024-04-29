// OrderComparisonChart.js

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const OrderComparisonChart = () => {
  const [data, setData] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Fetch data from the backend API using Axios
    axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/dbstats`)
      .then(response => {
        setData(response.data);
      })
      
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    // Draw the bar graph when the data changes
    drawBarGraph();
  }, [data]);

  const drawBarGraph = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Extract counts from the data
    const pendingCount = data.filter(order => order.status === 'pending').length;
    const completeCount = data.filter(order => order.status === 'completed').length;

    // Bar dimensions and positions
    const barWidth = 100;
    const barSpacing = 58; // Increased spacing
    const startX = 100; // Adjusted starting position to move only the bars to the right
    const startY = canvas.height - 70;

    // Draw pending bar
    ctx.fillStyle = 'rgba(0, 0, 255, 0.7)'; // Blue color
    ctx.fillRect(startX, startY - pendingCount * 15, barWidth, pendingCount * 15);

    // Draw complete bar
    ctx.fillStyle = 'rgba(0, 0, 255, 0.7)'; // Blue color
    ctx.fillRect(startX + barWidth + barSpacing, startY - completeCount * 15, barWidth, completeCount * 15);

    // Draw labels
    ctx.fillStyle = '#333';
    ctx.font = '16px sans-serif';
    ctx.fillText('Pending', 130, startY + 50); // Adjusted positioning
    ctx.fillText('Completed', 280 , startY + 50); // Adjusted positioning

    // Display counts on top of bars in black
    ctx.fillStyle = '#000';
    ctx.font = '18px sans-serif';
    ctx.fillText(pendingCount, startX + barWidth / 2, startY - pendingCount * 15 - 10); // Adjusted positioning
    ctx.fillText(completeCount, startX + barWidth + barSpacing + barWidth / 2, startY - completeCount * 15 - 10); // Adjusted positioning
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <canvas ref={canvasRef} width={500} height={400} className="border border-gray-300"></canvas>
    </div>
  );
};

export default OrderComparisonChart;
