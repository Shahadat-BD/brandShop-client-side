import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai'
const MyCart = () => {

const loadMyProductCart = useLoaderData()
const [myProductCart,setMyProductCart] = useState(loadMyProductCart)
const handleDeleteCart = id =>{
     fetch(`http://localhost:5000/my-cart/${id}`,{
        method:"DELETE"
     })
     .then(res => res.json())
     .then(data =>{
        if (data.deletedCount > 0) {
            alert("product has been deleted successfully")
            const remainingCart = myProductCart.filter(myPrdCart => myPrdCart._id !== id)
            setMyProductCart(remainingCart)
        }
     })
}

    return (
       <div className='my-10 lg:w-[80%] m-auto w-[90%]'>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                myProductCart.map(myCart => 
                <div className='flex gap-5 bg-gray-100 rounded-md p-2'>
                        <img className='lg:w-[180px] w-[100px] h-[120px] lg:h-[150px]' src={myCart.productImage} alt="" srcset="" />
                       <div>
                       <p>{myCart.productName}</p>
                        <p>Brand :{myCart.brandName}</p>
                        <p>Price :${myCart.price}</p>
                        <p>Rating : {myCart.rating}</p>
                        <AiFillDelete onClick={()=>handleDeleteCart(myCart._id)} className='text-3xl cursor-pointer'/>
                       </div>
                </div>)
            }
        </div>
       </div>
    );
};

export default MyCart;