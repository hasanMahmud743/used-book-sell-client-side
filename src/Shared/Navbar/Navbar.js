import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/Contexts";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  const handleLogOut = () => {
    logOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Log In</a>
              </li>
              <li>
                <a>Registration</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Knowledge-Repurchase
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <a onClick={handleLogOut} className="btn btn-sm bg-gradient-to-r from-violet-500 to-pink-500">Log Out</a>
          ) : (
            <a className="btn btn-sm bg-gradient-to-r from-violet-500 to-pink-500">Log In</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
