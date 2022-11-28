import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../Context/Contexts";

const AddProduct = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const products = {...data , email: user.email }
    console.log(data);
    fetch('https://server-side-ashy.vercel.app/products',{
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(products)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        navigate('/dashboard/myproduct')
    })
  };

  return (
    <div>
      <p className="text-4xl font-bold text-center pb-10">Add products</p>
      <form
        onSubmit={handleSubmit(formSubmit)}
        
      >
        <div  className="grid grid-cols-2 gap-5">

        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="name"
            placeholder="Product Name"
            className="input input-bordered"
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors.name && (
            <span className="pt-2 text-red-400 label-text-alt ">
              {errors?.name?.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile NO</span>
          </label>
          <input
            type="name"
            placeholder="Mobile"
            className="input input-bordered"
            {...register("mobile", {
              required: "This field is required",
            })}
          />
          {errors.mobile && (
            <span className="pt-2 text-red-400 label-text-alt ">
              {errors?.mobile?.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Previous Price</span>
          </label>
          <input
            type="name"
            placeholder="Previous Price"
            className="input input-bordered"
            {...register("previousPrice", {
              required: "This field is required",
            })}
          />
          {errors.previousPrice && (
            <span className="pt-2 text-red-400 label-text-alt ">
              {errors?.previousPrice?.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Current Price</span>
          </label>
          <input
            type="name"
            placeholder="Current Price"
            className="input input-bordered"
            {...register("currentPrice", {
              required: "This field is required",
            })}
          />
          {errors.currentPrice && (
            <span className="pt-2 text-red-400 label-text-alt ">
              {errors?.currentPrice?.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Conditions</span>
          </label>
          <select
            {...register("condition", {
              required: "This field is required",
            })}
            className="select select-bordered w-full "
          >
            <option selected>Good</option>
            <option>Better</option>
            <option>excellent</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <select
            {...register("Location", {
              required: "This field is required",
            })}
            className="select select-bordered w-full "
          >
            <option selected>Dhaka</option>
            <option>Rajshahi</option>
            <option>Barishal</option>
            <option>Khulna</option>
            <option>Noakhali</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="name"
            placeholder="Description"
            className="input input-bordered"
            {...register("description", {
              required: "This field is required",
            })}
          />
          {errors.description && (
            <span className="pt-2 text-red-400 label-text-alt ">
              {errors?.description?.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Year of Parches</span>
          </label>
          <input
            type="name"
            placeholder="Year of Parches"
            className="input input-bordered"
            {...register("year", {
              required: "This field is required",
            })}
          />
          {errors.year && (
            <span className="pt-2 text-red-400 label-text-alt ">
              {errors?.year?.message}
            </span>
          )}
        </div>
        </div>

    
        <div className=" text-center  mt-10">
          <input
            type="submit"
            value="Add Product"
            className="btn outline-none btn-primary bg-gradient-to-r from-violet-500 to-pink-500"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
