import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EroorPage from "../Pages/404Page/EroorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        children:[
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: '/404',
              element:<EroorPage></EroorPage>
              
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/register',
              element: <Register></Register>
            }
          ]
    }

]);
export default router ;