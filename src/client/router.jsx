import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Homepage from "./components/Homepage";
import AuthForm from "./auth/AuthForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <Homepage />  },
            { path: "/login", element: <AuthForm /> }
        ]
    }
]);

export default router;