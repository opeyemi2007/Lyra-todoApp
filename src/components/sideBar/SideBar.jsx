import React from 'react'
import { GrHome } from "react-icons/gr";
import { MdOutlineTaskAlt } from "react-icons/md";
import { GiTrashCan } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import './sideBar.css'
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className='sideBarWrapper'>
        <div className="sideBarProfile">
            <div className="profilePic"></div>
            <span>Kingsleyadio@gmail.com</span>
        </div>


        <div className="navsWrapper">
        <a onClick={()=> navigate('/')}><GrHome />Home</a>
        <a onClick={()=> navigate('/tasks')}><MdOutlineTaskAlt />Tasks</a>
        <a ><GiTrashCan />Trash</a>
        </div>

        <h1><RiLogoutCircleLine />Logout</h1>


    </div>
  )
}

export default SideBar