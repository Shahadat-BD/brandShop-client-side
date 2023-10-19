import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai'
const MyCart = () => {

const loadMyProductCart = useLoaderData()


    return (

//         <div className='my-10 lg:w-[80%] w-[90%] m-auto'>
//         <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
//             {
//                brandProduct.map(product => 
//                       <div key={product._id} className='bg-gray-100 py-3 rounded-md cursor-pointer'>
//                      <div className="flex lg:flex-row flex-col gap-5 mx-3">
//                      <img className='w-[220px] m-auto h-[250px]'  src={product.productImage} alt="" srcset="" />
//                      <div>
//                      <h3  className=' font-bold text-pink-500 mt-2'>{product.productName}</h3>    
//                       <h3  className=' mt-2'>Price :${product.price}</h3>    
//                       <h3  className=' mt-2'>Brand Name :{product.brandName}</h3>    
//                       <h3  className=' mt-2'>Type : {product.category}</h3>    
//                       <h3  className=' mt-2'>Rating : {product.rating}</h3>   
//                       <Link to={`/productDetails/${product._id}`}> <button className="w-full btn btn-primary">Product Details</button> </Link>
//                       <button className="w-full my-2 btn btn-warning">Update Product</button>
//                      </div>
//                      </div>
//                </div>
//                    )
//             }
//         </div>
//    </div>

       <div className='my-10 lg:w-[80%] m-auto w-[90%]'>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                loadMyProductCart.map(myCart => 
                <div className='flex gap-5 bg-gray-100 rounded-md p-2'>
                        <img className='lg:w-[180px] w-[100px] h-[120px] lg:h-[150px]' src={myCart.productImage} alt="" srcset="" />
                       <div>
                       <p>{myCart.productName}</p>
                        <p>Brand :{myCart.brandName}</p>
                        <p>Price :${myCart.price}</p>
                        <p>Rating : {myCart.rating}</p>
                        <AiFillDelete className='text-3xl'/>
                       </div>
                </div>)
            }
        </div>
       </div>
    );
};

export default MyCart;