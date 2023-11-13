import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            ></ToastContainer>
        </div>
    );
};

export default Root;