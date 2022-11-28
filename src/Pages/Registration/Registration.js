import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";
import amimationData from "../../assets/signup.json";
import { authContext } from "../../Context/Contexts";
import useTitle from "../../Hooks/UseTitle";

const Registration = () => {
  useTitle("Registration");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { createUser, googleSignIn, profileUpdate } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    setLoading(true);
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const sellerAccount = data.seller;
   
    console.log(data, email, password);

    createUser(email, password)
      .then((data) => {
        console.log(data);
        profileUpdate({
          displayName: name,
        });
        const user = {
          email,
          name,
          accountType : sellerAccount ? 'seller' : 'normal'
        }

        fetch("https://server-side-ashy.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: data.user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.token);
            localStorage.setItem("access-token", data.token);
          });

        fetch('https://server-side-ashy.vercel.app/users',{
          method: 'post',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          toast.success('user created and added to DB successfully')
        })
        
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((data) => {
        console.log(data.user);
        fetch("https://server-side-ashy.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: data.user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.token);
            localStorage.setItem("access-token", data.token);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: amimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className=" md:p-20  bg-base-100">
        {loading && (
          <div className="text-center pb-28 pt-10">
            <button className="btn btn-square  loading"></button>
          </div>
        )}
        <div className=" hero m-auto md:w-11/12 rounded-xl md:p-10 bg-gray-100 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center md:p-20 lg:text-left">
              <div>
                <Lottie options={defaultOptions} height={500} width={500} />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <p className="font-bold text-3xl text-center mt-10">
                Registration!
              </p>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="card-body"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    className="input input-bordered"
                    {...register("name", {
                      required: "This field is required",
                    })}
                  />
                  {errors.name && (
                    <span className="pt-2 text-red-400 label-text-alt ">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: "This field is required",
                    })}
                  />
                  {errors.email && (
                    <span className="pt-2 text-red-400 label-text-alt ">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: "This field is required",
                    })}
                  />
                  {errors.password && (
                    <span className="pt-2 text-red-400 label-text-alt ">
                      {errors.password.message}
                    </span>
                  )}

                  <label className="label">
                    <p className="label-text-alt ">
                      {" "}
                      New Here? Go to
                      <Link to="/login" className="text-blue-600">
                        {" "}
                        Log In{" "}
                      </Link>
                      Page
                    </p>
                  </label>
                </div>

                <div className="form-control">
                  <label className=" flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs"
                      {...register("seller")}
                    />
                    <span className="label-text ml-4">Seller Account</span>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Registration"
                    className="btn outline-none btn-primary bg-gradient-to-r from-violet-500 to-pink-500"
                  />
                </div>
                <div className="divider">OR</div>
                {/* <div className="form-control ">
                <p className="btn btn-primary"> <FaGoogle className="text-xl mx-3 "/> Google</p>
              </div> */}
                <div className="flex justify-center text-3xl">
                  <FaGoogle
                    onClick={handleGoogleSignIn}
                    className=" mx-3 mt-1 text-gray-600 cursor-pointer"
                  />
                  <FaTwitter className=" mx-3  mt-1 text-gray-600 cursor-pointer" />
                  <FaGithub className=" mx-3  mt-1 text-gray-600 cursor-pointer" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
