import React from 'react'
import { MdStart } from "react-icons/md";
import '../styles/welcome.css'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='welcomePageWrapper'>
        <img src={require('src/assets/Premium Vector _ Tasks management and work organization flat illustration.jpeg')} />
        <h1>Welcome to Lyra Todo App</h1>
        <span>Stay organized, focused, and in  control with Lyra — your<br /> ultimate to-do list companion.
        Whether it's daily tasks or <br /> long-term goals, Lyra helps you plan, prioritize, and achieve with ease.</span>
        <button className="getstartedBtn" onClick={()=> navigate('/private')}>Get Started <MdStart /></button>
    </div>
    </>
  )
}

export default Welcome