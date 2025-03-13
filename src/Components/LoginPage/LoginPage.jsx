import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate("/homepage");
    };

    return (
        <div className="login-container">
            <h1 className="title">BANK MANAGEMENT SYSTEM</h1>
            <h2 className="subtitle">Login Page</h2>
            
            <form className="login-form">
                <div className="input-group">
                    <label className="label">Email:</label>
                    <input type="email" placeholder="Email" className="input-field" required />
                </div>

                <div className="input-group">
                    <label className="label">Password:</label>
                    <input type="password" placeholder="Password" className="input-field" required />
                </div>

                <div className="options">
                    <label className="remember-me">
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#" className="forgot-password">Forget Password</a>
                </div>

                <button className="login-button" onClick={handleLogin}>LOGIN</button>
            </form>
        </div>
    );
};
