import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarBackOffice from '../components/NavBarBackOffice';

const BaseScreenAdmin = () => {
    return (
        <div>
            <NavBarBackOffice/>
            <Outlet/>
        </div>
    );
};

export default BaseScreenAdmin;