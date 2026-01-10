import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "order",
                element: <Order />
            },
            {
                path: "order/:category",
                element: <Order />
            },
            {
                path: "logIn",
                element: <LogIn />
            },
            {
                path: "signUp",
                element: <SignUp />
            },
            {
                path: "secret",
                element: (
                    <PrivateRoute>
                        <Secret />
                    </PrivateRoute>
                )
            }
        ]
    }
]);
