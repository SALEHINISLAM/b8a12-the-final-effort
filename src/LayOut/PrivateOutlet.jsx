import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';
import PrivateNavbar from '../SharedComponents/PrivateNavbar';

const PrivateOutlet = () => {
    return (
        <div>
            <PrivateNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default PrivateOutlet;