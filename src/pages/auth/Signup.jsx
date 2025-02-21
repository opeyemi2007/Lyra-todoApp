import React, { useState } from 'react';
import { SiMinutemailer } from "react-icons/si";
import { IoIosLock } from "react-icons/io";
import '../../styles/signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import { toast } from 'react-toastify';

import logo from '../../assets/Task Management - App Icon.jpg';
import poster from '../../assets/poster.jpg';
import loginPoster from '../../assets/LoginPoster.jpg';

const Signup = () => {
  const [messages, setMessages] = useState("");
  const [errorBorder, setErrorBorder] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [greensuccess, setGreenSuccess] = useState(false);
  const [userInput, setUserInput] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const Api = "https://free-todo-api.vercel.app/user/sign-up";
  const baseUrl = "http://localhost:5173";

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.password || !confirmPassword) {
      setMessages("Please fill in all credentials.");
      toast.error("Please fill all fields");
      setErrorBorder(true);
      return;
    }

    if (userInput.password !== confirmPassword) {
      setMessages("Passwords do not match.");
      toast.error("Passwords do not match");
      setErrorBorder(true);
      return;
    }

    try {
      const response = await axios.post(Api, { 
        email: userInput.email, 
        password: userInput.password, 
        baseUrl 
      });

      console.log(response.data);
      setMessages("Signup successful! Confirm your mail");
      toast.success("Signup successful!");
      setGreenSuccess(true)
      setErrorBorder(false);
      localStorage.setItem('userData', JSON.stringify(response))
      setTimeout(() => navigate('/login'), 1500); 

    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || "Signup failed. Try again.";
      setMessages(errorMessage);
      toast.error(errorMessage);
      setErrorBorder(true);
    }
  };

  return (
    <div className='signupWrapper'>
                    {messages && <p className={`message animate__animated animate__shakeX ${greensuccess? 'greenMessageSuccess' : ''}`}>{messages}</p>}

      <div className="loginForm">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome!</h1>
        <span>
          Simplify your taskflow and boost your productivity <br />
          with <b>Lyra App</b>. Get started for FREE
        </span>

        <img src={poster} alt="Auth Poster" className='authPOster' />

        <form onSubmit={handleSignup}>
          <div className={`inputHolder ${errorBorder ? 'error-border' : ''}`}>
            <SiMinutemailer />
            <input
              type="email"
              placeholder="Email Address"
              value={userInput.email}
              onChange={(e) => {
                setUserInput(prev => ({ ...prev, email: e.target.value }));
                setMessages("");
                setErrorBorder(false);
              }}
              required
            />
          </div>

          <div className={`inputHolder ${errorBorder ? 'error-border' : ''}`}>
            <IoIosLock />
            <input
              type="password"
              placeholder="Password"
              value={userInput.password}
              onChange={(e) => {
                setUserInput(prev => ({ ...prev, password: e.target.value }));
                setMessages("");
                setErrorBorder(false);
              }}
              required
            />
          </div>

          <div className={`inputHolder ${errorBorder ? 'error-border' : ''}`}>
            <IoIosLock />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setMessages("");
                setErrorBorder(false);
              }}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <p>Already have an account?</p>
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </div>

      <div className="rightSide">
        <img src={loginPoster} alt="Login Poster" />
        <span>
          Make your tasks easier and organized <br /> with <b>Lyra</b>
        </span>
      </div>
    </div>
  );
};

export default Signup;
