import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="py-20 bg-slate-200">
      <p className="text-center font-bold text-4xl">Product Categories:</p>

      <div className=" text-center py-10">
        <Link to='/categories/web development'>
          {" "}
          <button className="btn bg-gradient-to-r from-violet-500 to-pink-500   mx-5">
            Web Development
          </button>
        </Link>
        <Link to='/categories/marketing'>
          {" "}
          <button className="btn bg-gradient-to-r from-violet-500 to-pink-500 btn-primary mx-5">
            Digital Marketing
          </button>
        </Link>
        <Link to='/categories/data science'>
          {" "}
          <button className="btn bg-gradient-to-r from-violet-500 to-pink-500 btn-primary mx-5">
            Data Science
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
