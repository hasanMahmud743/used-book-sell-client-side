import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllBuyer = () => {
    const buyers = useLoaderData();

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
              {buyers.map((user, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user.accountType}</td>
                  <td>
                    <button className="btn  btn-xs btn-circle">
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