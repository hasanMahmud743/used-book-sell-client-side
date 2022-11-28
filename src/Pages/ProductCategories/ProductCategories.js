import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Context/Contexts";

const ProductCategories = () => {
  const categories = useLoaderData();
  const {user} = useContext(authContext)
  const[name, setName] = useState('')
 
  const data = e =>{
    e.preventDefault()
    const phone = e.target.phone.value
    const address = e.target.address.value
    // const itemName = e.target
    const  order = {phone, address, email: user.email }
    console.log(order)
    fetch('https://server-side-ashy.vercel.app/categories',{
        method: 'post',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order) 
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data)
        toast.success('Your data added successfully')
        e.target.reset()
    })


    
  }

  return (
    <div className="py-20">
      {/* <p>this is product Categories {categories.length}</p> */}
      <div className="grid gap-10 m-10 md:grid-cols-2">
        {categories.map((cat) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img src={cat.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cat.item_name}</h2>
              <p>{cat.description}</p>

              <p className="flex "> Seller Name: 
                {cat.seller_name}{" "}
                {cat.verified === "true" && (
                  <FaCheck className="border rounded-circle" />
                )}
              </p>

              <p>Location: {cat.location}</p>
              <p> Orginal Price: {cat.ordinal_price}</p>
              <p> Resell Price: {cat.resell_price}</p>

              <p> Used Duration: {cat.used_duration}</p>
              <p> Post Date: {cat.post_date}</p>

              <div className="card-actions">
                <label htmlFor={cat._id} className="btn bg-gradient-to-r from-violet-500 to-pink-500 btn-primary">
                  Book Now
                </label>
              </div>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={cat._id} className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor={cat._id}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Congratulations random Internet user!
                </h3>

                <form  onSubmit={data}>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                    defaultValue={user?.displayName}
                    disabled
                      type="name"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">

                      <span className="label-text">Email</span>
                    </label>
                    <input
                    defaultValue={user?.email}
                    disabled
                      type="name"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                  
                      <span className="label-text">Item Name</span>
                    </label>
                    <input
                     defaultValue={cat.item_name}
                     
                     disabled
                      type="name"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                     defaultValue={cat.resell_price}
                     disabled
                      type="name"
                      placeholder="name"
                      className="input input-bordered"
                    />

                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Phone NO"
                        name="phone"
                        className="input input-bordered"
                       
                      />
                    </div>

                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">Meting Address</span>
                      </label>
                      <input
                        type="address"
                        name="address"
                        placeholder="Address"
                        className="input input-bordered"
                       
                      />
                    </div>
                  </div>
                  <input   type='submit' className="btn bg-gradient-to-r from-violet-500 to-pink-500 btn-primary mt-4 w-full" value='submit' />
                  {/* <p type='submit' className="btn btn-primary" value='submit' /> */}
                </form>
               
               
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* The button to open modal */}
    </div>
  );
};

export default ProductCategories;
