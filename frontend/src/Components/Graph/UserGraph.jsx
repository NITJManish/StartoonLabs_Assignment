// UserGraph.js

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './graph.css'

const UserGraph = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from backend/API
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Replace this URL with your backend/API endpoint to fetch user data
      const response = await fetch('http://localhost:5000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const prepareChartData = () => {
    // Prepare data for the chart
    // For example, you can count the number of users by gender
    const genderCounts = userData.reduce((acc, user) => {
      acc[user.gender] = (acc[user.gender] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(genderCounts),
      datasets: [
        {
          label: 'User Count by Gender',
          data: Object.values(genderCounts),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="user-graph">
      <h2>User Graph</h2>
      <div className="chart-container">
        <Line data={prepareChartData()} />
      </div>
    </div>
  );
};

export default UserGraph;

