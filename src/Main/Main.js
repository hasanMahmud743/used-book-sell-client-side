import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='max-w-7xl m-auto' >
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;