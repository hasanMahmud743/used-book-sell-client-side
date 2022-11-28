import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../../Context/Contexts";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  const [users, setUsers] = useState("");
  const { user } = useContext(authContext);
  console.log(user?.email, users);

  useEffect(() => {
    fetch(`https://server-side-ashy.vercel.app/allUser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.accountType);
        setUsers(data);
      });
  }, [user?.email]);

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
            ---
          </label>
          <div className="p-5">
            {" "}
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            
            {users?.accountType === "normal" && (
              <li>
                <Link to="/dashboard">All Orders</Link>
              </li>
            )}

            {users?.accountType === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/addproduct"> Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct"> My Product</Link>
                </li>
              </>
            )}

            {users?.accountType === 'admin'  && (
              <>
                <li>
                  <Link to="/dashboard/allseller"> All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyer"> All Buyer</Link>
                </li>
                <li>
                  <a>Reported Item</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
