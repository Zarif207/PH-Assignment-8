import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { TbLayoutNavbar } from 'react-icons/tb';
import Navbar from '../../Components/Header/Navbar';

const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;