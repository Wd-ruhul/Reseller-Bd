import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar'
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../../Shared/Footer/Footer';

const DashboardMain = () => {
  const { user } = useContext(AuthContext)
  const[isAdmin] = useAdmin(user.email)
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/myorder">My Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>

    
  );
};

export default DashboardMain;