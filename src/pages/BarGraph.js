import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
  const statsData = {
    labels: ['Category1', 'Category2', 'Category3'],
    data: [10, 20, 15],
  };

  const chartData = {
    labels: statsData.labels,
    datasets: [
      {
        label: 'Stats',
        data: statsData.data,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Horizontal bar chart
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div>
      <h2>Stats Bar Graph</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarGraph;
