import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/Contexts";

const AllBuyer = () => {
  const { user } = useContext(authContext);
  const [buyer, setBuyer] = useState([]);

  useEffect(() => {
    fetch(`https://server-side-ashy.vercel.app/allBuyer`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBuyer(data);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://server-side-ashy.vercel.app/allSeller/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          const remaining = buyer.filter((product) => product._id !== id);
          setBuyer  (remaining);
        }
      });
  };
  return (
    <div>
      <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Account Type</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {buyer.map((user, i) => (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user.accountType}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn  btn-xs btn-circle"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBuyer;
