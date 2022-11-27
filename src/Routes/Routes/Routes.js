import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Home/Login/Login";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Products from "../../Pages/Products/Products";



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
]);

export default router;