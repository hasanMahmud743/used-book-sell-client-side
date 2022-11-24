import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductCategories = () => {
  const categories = useLoaderData();
  return (
    <div>
      <p>this is product Categories {categories.length}</p>
      <div className="grid gap-10 grid-cols-2">
        {categories.map((cat) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={cat.image}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cat.item_name}</h2>
              <p>{cat.description}</p>
              <p>{cat.location}</p>
              <p>{cat.ordinal_price}</p>
              <p>{cat.resell_price}</p>

              <p>{cat.used_duration}</p>
              <p>{cat.post_date}</p>


              
              <div className="card-actions">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
