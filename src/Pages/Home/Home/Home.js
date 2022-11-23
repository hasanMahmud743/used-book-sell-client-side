import React from 'react';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
             <Slider></Slider>
             <Banner></Banner>
              <AdvertisedItem></AdvertisedItem>
            
        </div>
    );
};

export default Home;