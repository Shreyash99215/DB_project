import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = ({ scrollToSection,homeRef, aboutRef, faqRef, contactRef }) => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/LoginPage");
  };

  return (
    <div className='dashboard-container'>
      <h1>ONLINE BANK MANAGEMENT SYSTEM</h1>
      <ul className='menu-list'>
        <li onClick={() => scrollToSection(homeRef)}>HOME</li>
        <li onClick={() => scrollToSection(aboutRef)}>ABOUT</li>
        <li onClick={() => scrollToSection(faqRef)}>FAQ</li>
        <li onClick={() => scrollToSection(contactRef)}>CONTACT</li>
      </ul>
      <div>
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
};
