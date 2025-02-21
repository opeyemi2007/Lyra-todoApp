import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { GrHome } from "react-icons/gr";
import { IoFolderOpen } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import '../styles/home.css'
import 'animate.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const [openTodoTab, setOpenTodoTab] = useState(false)

  const toggleTodoTab = () =>{
    setOpenTodoTab(!openTodoTab)
  }

  const navigate = useNavigate()
  return (
    <>
    <div className='homeWrapper'>
        <div className="inputsFieldsWrapper">
            <input type="text" className="todoTitle" placeholder='Todo Title' />
            <button className="addTodo"><IoMdAdd /></button>
            <textarea type="text" className="todoDescription" />
        </div>
    </div>

    {/* mobile screen section */}



    <div className='mobilehomeWrapper'>
      <div className="mobileHeaderWrapper">
        <img src="src/assets/Task Management - App Icon.jpg" alt="" className="logo" />
        {/* <span className="mobileProfileName">opeyemiadio2007@gmail.com</span> */}
        <div className="mobileProfilePic"></div>
        </div>
      <img src="src/assets/working on progress.jpg" className='mobileScreenPoster' />
      <h2>Add a Task Today</h2>

      {
        openTodoTab && (
        <div className="mobileinputsFieldsWrapper animate__animated animate__bounceInUp">
            <input type="text" className="mobiletodoTitle" placeholder='Todo Title' />
            <textarea type="text" className="mobiletodoDescription" />
            <div className="mobileAddTodoBtn"><FaCheck /></div>
        </div>
        )
      }
        

        <div className="mobileNavBar">
        <IoFolderOpen className='mobileIcons'onClick={()=> navigate('/tasks')}/>
        <div className="mobileOpenTodoTabBtn" onClick={toggleTodoTab}>{openTodoTab? <IoClose /> : <IoMdAdd />}</div>
        <FaTrash className='mobileIcons'/>
        </div>
    </div>
    </>
  )
}

export default Home