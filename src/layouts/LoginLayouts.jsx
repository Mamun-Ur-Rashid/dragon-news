import React from 'react';
import NavigationBar from '../Shared/navigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayouts = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayouts;