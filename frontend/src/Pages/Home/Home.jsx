import React from 'react'


// handleLoginSuccess = () => {
//     history.push('/profile');
//   }

const Home = ({ user }) => {
    return (
        <div className="profile-container">
          <h2>Welcome, {user.name}!</h2>
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Email ID:</strong> {user.email}
          </div>
          <div>
            <strong>Password:</strong> {user.password} {/* Note: It's not secure to display the password */}
          </div>
          <div>
            <strong>Gender:</strong> {user.gender}
          </div>
        </div>
      );
    };
    

export default Home
