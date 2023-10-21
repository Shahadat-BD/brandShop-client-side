import React, { useContext, useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
    const {user} = useContext(AuthContext)
    const email = user.email
    const productId = useParams()
    const [productAllInfo,setProductAllInfo] = useState([])
    // const [cart,setCart] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data =>{
            const product = data.find(product => product._id === productId.id)
             setProductAllInfo(product)
        })
    },[])

const handleMyCart = id => {



     fetch('http://localhost:5000/product')
     .then(res => res.json())
        .then(data =>{
            const myProductCart = data.find(product => product._id === id)
                  setProductAllInfo(myProductCart)
        })

        const brandName = productAllInfo.brandName
        const productName = productAllInfo.productName
        const rating = productAllInfo.rating
        const price = productAllInfo.price
        const type = productAllInfo.type
        const productDetails = productAllInfo.productDetails
        const brandImage =  productAllInfo.brandImage
        const productImage = productAllInfo.productImage

        const myProductCart = {email,brandName,productName,rating,price,type,productDetails,brandImage,productImage}
    
        fetch('http://localhost:5000/my-cart',{
                method:"POST",
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(myProductCart)
            })
             .then(res => res.json())
             .then(data =>{
                if (data.acknowledged) {
                    toast("my product successfully added in database")
                }
             })
 }

    return (
        <div className='flex my-10 lg:w-[70%] m-auto md:w-[80%] w-[90%]'>
        <div>
            <div className='flex gap-5 lg:flex-row flex-col'>
            <img className='lg:w-[490px] lg:h-[430px] rounded-md w-full'  src={productAllInfo.productImage} alt="" srcset="" />
           <div>
             <h3 className='font-bold text-red-500 text-2xl'>{productAllInfo.productName}</h3>    
                <h3  className='text-gray-500 font-medium mt-2'> <span className='font-bold'>Price :</span> ${productAllInfo.price}</h3>    
                <h3  className='text-gray-500 font-medium mt-2'><span className='font-bold'>Brand Name :</span>{productAllInfo.brandName}</h3>    
                <h3  className='text-gray-500 font-medium mt-2'><span className='font-bold'>Type : </span>{productAllInfo.type}</h3>    
                <h3  className='text-gray-500 font-medium mt-2'><span className='font-bold'>Rating :</span> {productAllInfo.rating}</h3> 
                <h3  className='text-gray-500 font-medium mt-2 '> <span className='font-bold'>Product details : </span> {productAllInfo.productDetails}</h3> 
                <button onClick={() => handleMyCart(productAllInfo._id)} className='py-2 rounded-md text-white bg-red-500 px-16 mt-3'>add to cart</button>
            </div> 
            </div>
            <ToastContainer/>
        </div>
        </div>
    );
};

export default ProductDetails;