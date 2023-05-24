import React from 'react'
import {  NavLink } from 'react-router-dom'
import LogOutLogic from '../../../helper/auth/LogOutLogic';

const SideBar = () => {
    const {logOut} = LogOutLogic();//logout 
  return (
    <div className='card'>
        <ul className='p-0 list-unstyled mb-0 sidebar'>
            <li><NavLink to="/profile" className="d-block p-2 text-decoration-none">Profile</NavLink></li>
            <li><NavLink to="/change-password" className="d-block p-2 text-decoration-none">Change Password</NavLink></li>
            <li><button className="w-100 p-2 text-left bg-transparent cursor-pointer text-decoration-none  border-0 " onClick={logOut}>Logout</button></li>
        </ul>
    </div>
  )
}

export default SideBar
