import { createBrowserRouter } from "react-router-dom";
import Service from "../Pages/Service/Service";
import Home from "../pages/Home/Home";
import Layout from "../Components/Layout/Layout";

export const myRouter   = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/service",
                element:<Service/>
            }
        ]
    }
])