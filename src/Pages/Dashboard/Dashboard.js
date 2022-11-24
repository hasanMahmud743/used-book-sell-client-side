import React from "react";
import { Outlet } from "react-router-dom";
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
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Add Orders</a>
            </li>
            <li>
              <a>Add a Product</a>
            </li>
            <li>
              <a>My Product</a>
            </li>
            <li>
              <a>All Seller </a>
            </li>
            <li>
              <a>All Buyer</a>
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
