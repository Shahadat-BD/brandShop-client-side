import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import NotFound from "../NotFound/NotFound";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import BrandProduct from "../Pages/BrandProduct/BrandProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement : <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/add-product',
                element: <PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>
            }, 
            {
                path: '/product/:brandName',
                element: <BrandProduct></BrandProduct>,
                loader : ({params}) => fetch(`https://e-commerce-server-side-psi.vercel.app/product/${params.brandName}`)
            }, 
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader : ({params}) => fetch(`https://e-commerce-server-side-psi.vercel.app/product/${params._id}`)
            }, 
            {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader:()=>fetch('https://e-commerce-server-side-psi.vercel.app/my-cart')
            },
             {
                 path : '/update-product/:id',
                 element : <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                 loader: ({params})=>fetch(`https://e-commerce-server-side-psi.vercel.app/product/${params.id}`)
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

export default router;