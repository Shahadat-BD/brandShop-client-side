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
       <div className='my-10 lg:w-[80%] m-auto w-[90%] md:w-[80%]'>
         <div className='grid lg:grid-cols-2  grid-cols-1 gap-5'>
            {
                myProductCart.length > 0 ? 
                    myProductCart.map(myCart => 
                    <div className='flex items-center gap-5 bg-gray-100 rounded-md p-2 md:p-5'>
                            <img className='lg:w-[180px] lg:h-[180px] md:w-[180px] md:h-[180px] w-[100px] h-[100px] rounded-sm' src={myCart.productImage} alt="" srcset="" />
                           <div className='flex-1'>
                           <p className='text-red-500 lg:text-2xl text-md md:text-xl font-bold'>{myCart.productName}</p>
                            <p className='text-gray-500 font-semibold mt-2'>Brand : <span className='font-bold text-black'>{myCart.brandName}</span></p>
                            <p className='text-gray-500 font-semibold mt-2'>Price :${myCart.price}</p>
                            <p className='text-gray-500 font-semibold mt-2'>Rating : {myCart.rating}</p>
                           </div>
                          <div onClick={()=>handleDeleteCart(myCart._id)} className='text-3xl bg-gray-300 cursor-pointer rounded-md text-red-500 p-2 round'>
                             <AiFillDelete/>
                          </div>
                    </div>)
                 : 
                   <p className=' text-red-500 text-3xl my-20 text-center'>No Added Product in here</p>
            }
        </div>
       </div>
    );
};

export default MyCart;