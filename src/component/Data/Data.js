// Data.js
import { useState,useEffect } from "react";

import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilSignOutAlt,
  UilBell,
  UilSignout,
  UilPlus,
  UilEdit,
  UilUser
} from "@iconscout/react-unicons";



export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
    path: "/admin"
  },
  {
    icon: UilPlus,
    heading: 'New Connections',
    path: "/approveconn"
  },
  {
    icon: UilUsersAlt,
    heading: "DB Requests",
    path: "/approvedb"
  },
  {
    icon: UilClipboardAlt,
    heading: "Complaints",
    path: "/approvecom"
  },
  {
    icon: UilEdit,
    heading: 'User',
    path: "/userdetails"
  },
  {
    icon: UilUsersAlt, // Use the user icon here
    heading: 'Employee Details',
    path: "/employeedetails" // Adjust the path as needed
  },
  {
    icon:UilBell,
    heading:'Remainders',
    path:"/remainders"
  },
  {
    icon: UilSignout,
    heading: 'Logout',
    path: "/"
  },
  
];