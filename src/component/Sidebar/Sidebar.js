import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import Logo from '../../logo.svg'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { SidebarData } from '../Data/Data'

const Sidebar = () => {
    const [selected,setSelected]=useState(0)
  return (
    <div className='Sidebar'>
        <div className='logo'>
            <img src="https://clipground.com/images/hp-gas-logo-clipart.jpg" alt=''></img>
            {/* <span>F1</span> */}
        </div>
        <div className='menus'>
            {SidebarData.map((item,index)=>{
                return(
                    <Link
                        to={item.path}  // Assuming each item in SidebarData has a 'path' property
                        className={selected === index ? 'menuItem active' : 'menuItem'}
                        key={index}
                        onClick={() => setSelected(index)}
                    >
                        <item.icon />
                        <span>{item.heading}</span>
                    </Link>
                )
            })}
            
        </div>
    </div>
  )
}

export default Sidebar