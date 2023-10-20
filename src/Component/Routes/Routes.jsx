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
                element: <AddProduct></AddProduct>,
            }, 
            {
                path: '/product/:brandName',
                element: <BrandProduct></BrandProduct>,
                loader : ({params}) => fetch(`http://localhost:5000/product/${params.brandName}`)
            }, 
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/product/${params._id}`)
            }, 
            {
                path: '/my-cart',
                element: <MyCart></MyCart>,
                loader:()=>fetch('http://localhost:5000/my-cart')
            },
             {
                 path : '/update-product/:id',
                 element : <UpdateProduct></UpdateProduct>,
                 loader: ({params})=>fetch(`http://localhost:5000/product/${params.id}`)
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