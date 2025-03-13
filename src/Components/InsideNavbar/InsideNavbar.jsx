import React from 'react'
import { useNavigate } from 'react-router-dom';

export const InsideNavbar = () => {
    const navigate = useNavigate();

    const handlehome =(event)=>{
      event.preventDefault();
      navigate("/homepage")
    }

    const handlecreate = (event)=>{
        event.preventDefault();
        navigate("/Createdetails");
    };

    const handleupdate = (event)=>{
        event.preventDefault();
        navigate("/Updatedetails");
    };

    const handlecheck = (event)=>{
        event.preventDefault();
        navigate("/Checkdetails");
    };

    const handleLogout = (event)=>{
      event.preventDefault();
      navigate("/LoginPage")
    };


  return (
    
    <div className='dashboard-container'>
      <h1>ONLINE BANK MANAGEMENT SYSTEM</h1>
      <ul className='menu-list'>
        <li onClick={handlehome}>HOME</li>
        <li onClick={handlecreate}>CREATE</li>
        <li onClick={handleupdate}>UPDATE</li>
        <li onClick={handlecheck} >CHECK</li>
      </ul>
      <div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  )
}


