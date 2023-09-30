import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import Order from "../../Pages/Order/Order/Order";
import Signup from "../../Pages/Signup/Signup";
import Secret from "../../Components/Shared/Secret/Secret";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Dashboard from "../../Layout/Dashboard";
import MyCart from "../../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Login from "../../Pages/Login/login";
import AddItem from "../../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageItems from "../../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import UserHome from "../../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../../Pages/Dashboard/AdminHome/AdminHome";
import PaymentHistory from "../../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../../Pages/Dashboard/AddReview/AddReview";
import ContactUs from "../../Pages/Contact Us/ContactUs";

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
                path:'/order',
                element:<Order/>
            },
            {
                path:'/contact-us',
                element:<ContactUs/>
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
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'/dashboard/userhome',
                element:<UserHome/>
            },
            {
                path:'/dashboard/mycart',
                element:<MyCart/>
            },
            {
                path:'/dashboard/addreview',
                element:<AddReview/>
            },
            {
                path:'/dashboard/paymenthistory',
                element:<PaymentHistory/>
            },
            {
                path:'/dashboard/payment',
                element:<Payment/>
            },
            {
                path:'/dashboard/adminhome',
                element:<AdminRoute><AdminHome/></AdminRoute>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path:'/dashboard/addItem',
                element:<AdminRoute><AddItem/></AdminRoute>
            },
            {
                path:'/dashboard/manageItems',
                element:<AdminRoute><ManageItems/></AdminRoute>
            }
        ]
    }
])
export default routes;