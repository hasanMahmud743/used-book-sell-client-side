import React from "react";
import useTitle from "../../../Hooks/UseTitle";
import AdvertisedItem from "../AdvertisedItem/AdvertisedItem";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
      <AdvertisedItem></AdvertisedItem>
      <Banner></Banner>
    </div>
  );
};

export default Home;
