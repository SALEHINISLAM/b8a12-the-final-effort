import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';

const PrivateOutlet = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default PrivateOutlet;