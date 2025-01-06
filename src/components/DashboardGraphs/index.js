import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const DashboardGraphs = () => {
  // Data for workflow (line chart)
  const workflowData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Workflow',
        data: [10, 15, 9, 20, 18, 22, 15, 25, 20, 30, 28, 35],
        borderColor: '#def2f1',
        backgroundColor: 'rgba(0, 184, 148, 0.2)',
        fill: true,
      },
    ],
  };

  // Data for marketing (bar chart)
  const marketingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Marketing',
        data: [5, 10, 15, 8, 20, 18, 25, 30, 35, 40, 45, 50],
        backgroundColor: '#feffff',
      },
    ],
  };

  // Options for both charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '45%' }}>
        <h3>Recent Workflow</h3>
        <Line data={workflowData} options={options} />
      </div>
      <div style={{ width: '45%' }}>
        <h3>Recent Marketing</h3>
        <Bar data={marketingData} options={options} />
      </div>
    </div>
  );
};

export default DashboardGraphs;
