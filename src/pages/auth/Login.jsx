import React, { useState } from 'react';
import { SiMinutemailer } from "react-icons/si";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/login.css';
import loginImage from '../../assets/LoginPoster.jpg';

const Login = () => {
  const [messages, setMessages] = useState("");
  const [errorBorder, setErrorBorder] = useState(false);
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [greensuccess, setGreenSuccess] = useState(false);
  const Api = "https://free-todo-api.vercel.app/user/log-in";

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.password) {
      setMessages("Please fill in all credentials.");
      toast.error('Please fill in all fields.');
      setErrorBorder(true);
      return;
    }

    try {
      const response = await axios.post(Api, userInput);
      console.log(response.data);
      setMessages("Login successful! Redirecting to Home...");
      setGreenSuccess(true);
      toast.success('Login successful!');
      setErrorBorder(false);

      setTimeout(() => navigate('/home'), 1500); 
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setMessages(error.response?.data?.message || "Login failed. Try again.");
      toast.error(error.response?.data?.message || "Login failed.");
      setErrorBorder(true);
    }
  };

  return (
    <div className='loginWrapper'>
              {messages && <p className={`message animate__animated animate__shakeX ${greensuccess? 'greenMessageSuccess' : ''}`}>{messages}</p>}
      <div className="loginSide">
      <img src="src/assets/Task Management - App Icon.jpg" alt="" className="logo" />
        <h1>Welcome back!</h1>
        <span>Log in to pick up where you left off.</span>

        <img src="src/assets/poster.jpg" className='mobileLoginPoster' />


        <form onSubmit={handleLogin}>
          <div className={`inputHolder ${errorBorder ? "error-border" : ""}`}>
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
            />
          </div>
          <div className={`inputHolder ${errorBorder ? "error-border" : ""}`}>
            <IoIosLock />
            <input
              type="password"
              placeholder="Password"
              value={userInput.password}
              onChange={(e) =>{
                setUserInput(prev => ({ ...prev, password: e.target.value }));
                setMessages("");          
                setErrorBorder(false); 
              }}
            />
          </div>
          <button type="submit" onClick={handleLogin}>LOG IN</button>
        </form>

        <p>Don't have an account?</p>
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => navigate('/signup')}
        >
          Signup
        </span>
      </div>

      <div className="loginRightSide">
        <img src={loginImage} alt="Login Poster" />
        <span>
          Make your tasks easier and organized <br /> with <b>Lyra</b>
        </span>
      </div>
    </div>
  );
};

export default Login;
