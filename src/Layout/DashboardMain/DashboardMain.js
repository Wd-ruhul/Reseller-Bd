import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar'

const DashboardMain = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    
    <Outlet></Outlet>
    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
      <li><Link to='/dashboard/myorder'>My Order</Link></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
    </div>
  );
};

export default DashboardMain;