import React from 'react';
import NavbarTwo from "../components/NavbarTwo";
import Sidebar from "../components/Sidebar";

const Dashboard = ({ name, ...props }) => {
  return (
    <>
      <NavbarTwo />
      
      <Sidebar />
    </>
  );
};


export default Dashboard;
