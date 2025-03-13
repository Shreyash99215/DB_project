import React from 'react';
import './HomePage.css'; 
import { InsideNavbar } from '../InsideNavbar/InsideNavbar';

export const HomePage = () => {
  return (
    <>
      <InsideNavbar />
      <div className="container">
        <div className="input-box">
          <label className="label">Admin ID:</label>
          <input type="text" placeholder="Admin ID" className="input-field" />

          <label className="label">Branch ID:</label>
          <input type="text" placeholder="Branch ID" className="input-field" />

          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </>
  );
};
