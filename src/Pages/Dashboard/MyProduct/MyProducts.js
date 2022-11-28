import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/Contexts';

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(authContext);
  console.log(user?.email, products);

  useEffect(() => {
    fetch(`https://server-side-ashy.vercel.app/products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [user?.email]);

  // useEffect(() => {
  //   fetch(`https://server-side-ashy.vercel.app/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  // }, [user?.email]);



  const handleDelete = (id) =>{
    console.log(id)
    fetch(`https://server-side-ashy.vercel.app/products/${id}`,{
      method: 'delete'
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      const remaining = products.filter( product => product._id !== id)
      setProducts(remaining)
    })
  }

  const handleAdvertise = id =>{
    console.log(id)
    fetch(`https://server-side-ashy.vercel.app/product/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      fetch(`https://server-side-ashy.vercel.app/advertise`,{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('Added to advertise')
      })

      
    })
  }
  
    // const products = useLoaderData();
    return (
        <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Advertise</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((users, i) => (
                // console.log(users)
                <tr>
                  <th>{i + 1}</th>
                  <td>{users?.name}</td>
                  <td>{users?.description}</td>
                  <td>{users?.year}</td>
                  <td>{users.Location}</td>
                  <td><button onClick={()=> handleAdvertise(users?._id)} className='btn btn-xs btn-outline'>Advertise</button></td>

                  <td>
                    <button onClick={()=> handleDelete(users._id)} className="btn  btn-xs btn-circle">
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
    );
};

export default MyProducts;