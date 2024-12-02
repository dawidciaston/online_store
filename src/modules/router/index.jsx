import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Front } from 'modules/app/front';
import { Cart } from 'modules/app/cart';
import { Contact } from 'modules/app/contact';
import { Login } from 'modules/app/login';
import { About } from 'modules/app/about';

const router = createBrowserRouter([
    {
        element: <Front />,
        path: '/',
    },
    {
        element: <Cart/>,
        path: '/cart',
    },
    {
        element: <About/>,
        path: '/about',
    },
    {
        element: <Contact />,
        path: '/contact'
    },
    {
        element: <Login />,
        path: '/login'
    }
])

export { router };
