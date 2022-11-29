import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Home/Login/Login";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Products from "../../Pages/Products/Products";
import Blog from "../../Pages/Blog/Blog"
import NotFound from "../../Pages/NotFound/NotFound";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import DashboardMain from "../../Layout/DashboardMain/DashboardMain";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/addproduct",
        element: <AddProducts></AddProducts>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardMain></DashboardMain>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myorder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/allusers",
        element:<AllUsers></AllUsers>
      },
    ],
  },

  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;