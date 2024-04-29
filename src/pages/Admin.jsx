// Admin.jsx
import React from 'react';
import './Admin.css';
import Sidebar from '../component/Sidebar/Sidebar';
import Middle from '../component/Middle/Middle';
import Cards from '../component/Cards/Cards';
import Table from '../component/Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const h1Styles = {
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  
  return (
    <div className="AdminDashboard">
      <Sidebar></Sidebar>
      <div>
        <h1 style={h1Styles}>Admin Dashboard</h1>
        <Cards></Cards>
        <Table></Table>
      </div>
      <div>col3</div>
    </div>
  );
};

export default Admin;
