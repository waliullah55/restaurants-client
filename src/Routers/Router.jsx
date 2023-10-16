import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from './../Pages/Order/Order';
import Login from "../Pages/Order/Login";
import SignUp from "../Pages/Order/SignUp";
import Dashboard from "../Layouts/Dashboard";
import MyCart from './../Pages/Dashbord/MyCart';
import PrivateRoute from './PrivateRoute';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/order/:category',
        element: <Order />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  },
  {
    path: '/dashbord',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element: <MyCart />
      }
    ]
  }
]);


export default router;