import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstractors from "../Pages/AllInstractors/AllInstractors";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AdminPages/AllUsers/AllUsers";
import AddClasses from "../Pages/Dashboard/InstractorPages/AddClasses";
import MyClasses from "../Pages/Dashboard/InstractorPages/MyClasses";
import ShowAllClasses from "../Pages/Dashboard/AdminPages/ShowAllClasses";
import MySelectedClasses from "../Pages/Dashboard/StudentPages/MySelectedClasses";
import PaymentGetWay from "../Pages/Dashboard/StudentPages/PaymentGetWay/PaymentGetWay";
import EnrollClasses from "../Pages/Dashboard/StudentPages/EnrollClasses";
import PaymentHistory from "../Pages/Dashboard/StudentPages/PaymentHistory";
import DashBoardHome from "../Pages/Dashboard/DashBoardHome";
import AdminPrivetRoute from "../PrivetRouter/AdminPrivetRoute";
import InstractorPrivetRoute from "../PrivetRouter/InstractorPrivetRoute";
import StudentPrivetRoute from "../PrivetRouter/StudentPrivetRoute";
import UserPrivetRoute from "../PrivetRouter/UserPrivetRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element:<HomePage/>
            },
            {
                path: "classes",
                element: <AllClasses/>
            },
            {
                path:"instractor",
                element: <AllInstractors/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path:"/dashboard",
                element: <UserPrivetRoute><Dashboard/></UserPrivetRoute> ,
                children:[
                    {
                        path:"/dashboard",
                        element:<DashBoardHome/>
                    },
                    {
                        path: "selectClasses",
                        element: <StudentPrivetRoute><MySelectedClasses/></StudentPrivetRoute> 
                    },
                    {
                        path:"payment",
                        element: <StudentPrivetRoute><PaymentGetWay/></StudentPrivetRoute> 
                    },
                    {
                        path:"enrolledClasses",
                        element: <StudentPrivetRoute><EnrollClasses/></StudentPrivetRoute> 
                    },
                    {
                        path: "paymentHistory",
                        element: <StudentPrivetRoute><PaymentHistory/></StudentPrivetRoute> 
                    },
                    {
                        path:"addClass",
                        element: <InstractorPrivetRoute><AddClasses/></InstractorPrivetRoute> 
                    },
                    {
                        path:"myClasses",
                        element: <InstractorPrivetRoute><MyClasses/></InstractorPrivetRoute>
                    },
                    
                    {
                        path:"allClasses",
                        element: <AdminPrivetRoute><ShowAllClasses/></AdminPrivetRoute> 
                    },
                    {
                        path:"manageUser",
                        element: <AdminPrivetRoute><AllUsers/></AdminPrivetRoute>
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
])

// TODO: Manage Dash Board Compoment