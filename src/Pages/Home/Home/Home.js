import React, { useEffect, useState } from "react";
import useTitle from "../../../Hooks/UseTitle";
import AdvertisedItem from "../AdvertisedItem/AdvertisedItem";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";

const Home = () => {
  const [add, setAdd] =  useState([])
  useEffect(()=>{
    fetch('http://localhost:6500/advertise')
    .then(res => res.json())
    .then(data=> {
      console.log(data)
      setAdd(data)
    })

  }, [])
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <Categories ></Categories>
      {
        add.length &&   <AdvertisedItem advertise={add} ></AdvertisedItem>
      }
    
      <Banner></Banner>
    </div>
  );
};

export default Home;
