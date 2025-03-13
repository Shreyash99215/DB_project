import React, { useRef} from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Dashboard.css'; 


export const Dashboard = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const faqRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection =(ref) =>{
        ref.current.scrollIntoView({ behavior:'smooth', block: 'start'});
    }
  return (
    <>
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} faqRef={faqRef} contactRef={contactRef} />

      <div ref={homeRef} className='section'>
        <h1>Home</h1>
        <p>
        Welcome to the Online Bank Management System
        Manage your bank accounts, view transaction history, and access services with ease. 
        Our secure and user-friendly platform ensures that your financial needs are met efficiently.
         Get started today by logging into your account!
        </p>

      </div>

      {/* <div className='body-of-dashboard'>
        <div className='image-container'>
            <img src={background} alt='image'/>
        </div>
      </div> */}

      <div ref={aboutRef} className='section'>
        <h1> About Us</h1>
        <p>Welcome to the Online Bank Management System, your trusted financial partner. Our platform provides a seamless 
            and secure way to manage your finances, offering fast money transfers, account tracking, and reliable customer support. 
            Join us today and experience effortless banking.</p>
      </div>


      <div ref={faqRef} className='section'>
        <h1>Frequently Asked Questions</h1>
        <p>
         1. How do I create an account?<br />
            You can sign up by clicking on the "Register" button and filling in the required details.<br/>

         2. Is my data secure?<br/>
            Yes, we use advanced encryption and security measures to protect your personal and financial information.<br/>

         3. Can I transfer money to international accounts?<br/>
            Yes, our system allows secure international transfers with minimal fees.<br/>

         4. How do I reset my password?<br/>
            Click on "Forgot Password" and follow the steps to reset your credentials.<br/>
        </p>
      </div>
      {/* <div>
        <h1>Latest News</h1>
      </div> */}

      <div ref={contactRef} className='section'>
        <h1>Contact Us</h1>
        <div className='contact-form'>
            <input type="Name" placeholder="Name"></input>
            <input type="Email" placeholder="Email"></input>
            <textarea placeholder='enter your message'></textarea>
        </div>
        <button className='submit-btn'>SUBMIT NOW</button>
      </div>
    </>
  );
};
