import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
  // State variables for managing user data and sections
  const [userData, setUserData] = useState({
    firstName: 'Adithya',
    lastName: '',
    email: 'john@example.com',
    address: '123 Main St, City',
    accountBalance: 500,
  });

  const [currentSection, setCurrentSection] = useState('dashboard');

  // Function to handle section change
  const changeSection = (section) => {
    setCurrentSection(section);
  };

  // Render Dashboard section
  // Render Dashboard section
const renderDashboard = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Welcome, {userData.firstName}!</h2>
      <p>Your account balance: ₹{userData.accountBalance}</p>
      <Link to={"/payment"} className="btn" onClick={() => changeSection('payment')}>Make Payment</Link>
      <button className="btn" onClick={() => changeSection('profile')} style={{ marginLeft: '10px' }}>Edit Profile</button>
    </div>
  );
};


  // Render Payment section
  const renderPayment = () => {
    return (
      <div className="section-container">
        <h2 className="section-title">Make Payment</h2>
        {/* Payment form goes here */}
        <button className="btn" onClick={() => changeSection('dashboard')}>Back to Dashboard</button>
      </div>
    );
  };

  // Render Profile section
  const renderProfile = () => {
    return (
      <div className="section-container">
        <h2 className="section-title">Edit Profile</h2>
        {/* Profile editing form goes here */}
        <button className="btn" onClick={() => changeSection('dashboard')}>Back to Dashboard</button>
      </div>
    );
  };

  return (
    <div className="user-interface">
      {/* Navigation */}
      <nav className="nav-container">
        <ul className="nav-list">
          <li className={currentSection === 'dashboard' ? 'active' : ''} onClick={() => changeSection('dashboard')}>Dashboard</li>
          <li className={currentSection === 'payment' ? 'active' : ''} onClick={() => changeSection('payment')}>Make Payment</li>
          <li className={currentSection === 'profile' ? 'active' : ''} onClick={() => changeSection('profile')}>Edit Profile</li>
        </ul>
      </nav>

      {/* Render the current section */}
      {currentSection === 'dashboard' && renderDashboard()}
      {currentSection === 'payment' && renderPayment()}
      {currentSection === 'profile' && renderProfile()}
    </div>
  );
};

export default Welcome;
