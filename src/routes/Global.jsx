import React from 'react'
import SideBar from '../components/sideBar/SideBar'
import { Outlet } from 'react-router-dom'
import '../styles/global.css'

const Global = () => {
  return (
    <div style={{display: 'flex'}}>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Global