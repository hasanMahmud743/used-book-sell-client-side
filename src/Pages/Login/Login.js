import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";
import amimationData from "../../assets/login.json";
import { authContext } from "../../Context/Contexts";
import useTitle from "../../Hooks/UseTitle";

const Login = () => {
  useTitle("Login");
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)

  const { signInUser, googleSignIn } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    setLoader(true)
    const email = data.email;
    const password = data.password;
    console.log(data, email, password);

    signInUser(email, password).then((data) => {
      console.log(data.user.email);

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
        navigate('/')
    })
    .catch((err) => {
      setLoader(false)
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
        setLoader(false)
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

  const commingSoon = () => {
    toast.success("Login system is coming soon");
  };

  return (
    <div>
      <div className=" md:p-20  bg-base-100">
      {loader && (
          <div className="text-center pb-28 pt-10">
            <button className="btn btn-square  loading"></button>
          </div>
        )}
        <div className=" hero m-auto md:w-11/12 rounded-xl md:p-10 bg-gray-100 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center md:p-20 lg:text-left">
              {/* <h1 className="text-5xl font-bold">Log In!</h1> */}

              <div>
                <Lottie options={defaultOptions} height={500} width={500} />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <p className="font-bold text-3xl text-center mt-10">Log In!</p>
              <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { require: true })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", { require: true })}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label className="label">
                    <p className="label-text-alt">
                      {" "}
                      New Here? Go to
                      <Link className="text-blue-600" to="/registration">
                        {" "}
                        Registration 
                        {" "}
                      </Link>
                       Page
                    </p>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-gradient-to-r from-violet-500 to-pink-500">
                    Log In
                  </button>
                </div>
                <div className="divider">OR</div>

                <div className="flex justify-center text-3xl">
                  <FaGoogle
                    onClick={handleGoogleSignIn}
                    className=" mx-3 mt-1 text-gray-600 cursor-pointer "
                  />
                  <FaTwitter
                    onClick={commingSoon}
                    className=" mx-3  mt-1 text-gray-600 cursor-pointer"
                  />
                  <FaGithub
                    onClick={commingSoon}
                    className=" mx-3  mt-1 text-gray-600 cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
