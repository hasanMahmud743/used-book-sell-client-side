import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
         <div className="p-5"> <Outlet></Outlet></div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard/allusers'>All Orders</Link>
            </li>
            <li>
              <Link to='/dashboard/addproducts'> Add a Product</Link>
            </li>
            <li>
            <Link to='/dashboard/myproduct'> My Product</Link>
            </li>
            <li>
            <Link to='/dashboard/allseller'> All Seller</Link>
            </li>
            <li>
            <Link to='/dashboard/allbuyer'> All Buyer</Link>
            </li>
            <li>
              <a>Reported Item</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
