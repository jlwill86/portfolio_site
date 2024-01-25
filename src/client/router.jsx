import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Homepage from "./components/Homepage";
import AuthForm from "./auth/AuthForm";
import MyAccount from "./components/MyAccount";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <Homepage />  },
            { path: "/login", element: <AuthForm /> },
            { path: "/user/:id", element: <MyAccount />}
        ]
    }
]);

export default router;