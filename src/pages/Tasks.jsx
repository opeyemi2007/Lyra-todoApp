import React from 'react'
import { FiSearch } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { IoFolderOpen } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import '../styles/tasks.css'
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
  const navigate = useNavigate()
  return (
    <div className='taskWrapper'>
        <div className="heading">
            <div className="taskSearchWrapper">
                <input type="text" placeholder='Search Tasks'/>
                <button className="searchTaskBtn"><FiSearch size={20} cursor={"pointer"} /></button>
            </div>
        </div>
        
        <div className="todoCardsWrapper">
        <div className="todoCard">
          <div className="todoTitlWRapper">
            <p>Title</p> 
            <div className='buttonsHolderwrap'>
          <div className="todoCArdBtn" style={{backgroundColor:'green'}}><MdEdit /></div>
          <div className="todoCArdBtn" style={{backgroundColor:'red'}}><MdDeleteForever /></div>
          </div>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nobis tenetur repudiandae iure cupiditate, a inventore labore 
            optio saepe facere dolorem commodi adipisci sint porro autem animi 
            ducimus cum repellendus ipsa.
          </p>
          <div className="dateHolder">20/01/2025</div>
        </div>

        <div className="mobileNavBar">
        <IoFolderOpen className='mobileIcons'onClick={()=> navigate('/tasks')}/>
        <div className="mobileOpenTodoTabBtn" onClick={()=> navigate('/')}><AiFillHome /></div>
        <FaTrash className='mobileIcons'/>
        </div>
        </div>
       
    </div>
  )
}

export default Tasks