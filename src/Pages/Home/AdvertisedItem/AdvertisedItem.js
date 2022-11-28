import React from "react";

const AdvertisedItem = ({ advertise }) => {
  console.log(advertise);
  return (
    <div className="m-20">
      <p className="text-center font-bold text-4xl m-10">
        this is advertised item
      </p>
      <div className="grid gap-10 grid-cols-2">
        {advertise.map((add) => (
          <div className="card  bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src="https://thumbs.dreamstime.com/b/advertising-word-cloud-business-concept-56936998.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title">Product Name: {add.name}</h2>
              <p>Condition: {add.condition}</p>
              <p>Email: {add.email}</p>

              <p>Contact: {add.mobile}</p>

              <p>Previous Price: {add.previousPrice}</p>
              <p>Current Price: {add.currentPrice}</p>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisedItem;
