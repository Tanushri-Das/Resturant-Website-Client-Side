import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import Order from "../../Pages/Order/Order/Order";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Secret from "../../Components/Shared/Secret/Secret";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/menu',
                element:<Menu/>
            },
            {
                path:'/order/:category',
                element:<Order/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/secret',
                element:<PrivateRoutes><Secret/></PrivateRoutes>
            },
        ]
    }
])
export default routes;