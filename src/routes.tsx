import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/Home.jsx'
import { Layout } from "./pages/Layout.jsx";
import { Login } from "./pages/Login.jsx";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },

]);
