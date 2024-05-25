import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EroorPage from "../Pages/404Page/EroorPage";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PropertieDetails from "../Pages/Home/PropertieDetails";
import Agent from "../Pages/Agent/Agent";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        errorElement:<EroorPage/>,
        children:[
            {
              path: '/',
              element: <Home></Home>,
              loader: ()=>fetch('data.json')

            },
            {
              path: '/eState/:id',
              element: <PrivateRoute><PropertieDetails></PropertieDetails></PrivateRoute>,
              loader: ()=> fetch("/data.json")
            },
            {
              path: '/errorpage',
              element:<EroorPage></EroorPage>
              
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/register',
              element: <Register></Register>
            },
            {
              path: '/agent',
              element: <PrivateRoute><Agent></Agent></PrivateRoute>
            },
            {
              path:'/profile',
              element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            }
          ]
    }

]);
export default router;