// AdminDashboard.js

import React, { useEffect, useState } from 'react';
import UserGraph from '../../Components/Graph/UserGraph';

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from backend/API
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Replace this URL with your backend/API endpoint to fetch user data
      const response = await fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer YOUR_AUTH_TOKEN',
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Count</th>
            <th>Gender</th>
            <th>Last Login Date</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.count}</td>
              <td>{user.gender}</td>
              <td>{user.lastLoginDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <UserGraph/>
    </>
  );
};

export default AdminDashboard;
