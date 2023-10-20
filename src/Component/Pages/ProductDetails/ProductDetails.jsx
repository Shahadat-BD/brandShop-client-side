import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';

const ProductDetails = () => {
    const productId = useParams()
    const [productDetails,setProductDetails] = useState([])
    // const [cart,setCart] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data =>{
            const product = data.find(product => product._id === productId.id)
             setProductDetails(product)
        })
    },[])

const handleMyCart = id => {
     fetch('http://localhost:5000/product')
     .then(res => res.json())
        .then(data =>{
            const myProductCart = data.find(product => product._id === id)
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
                    alert("my cart added in database")
                }
             })
        })
 }

    return (
        <div className='flex my-10 lg:w-[70%] m-auto'>
        <div>
            <div className='flex gap-5 lg:flex-row md:flex-row flex-col'>
            <img className='w-[300px] h-[300px]'  src={productDetails.productImage} alt="" srcset="" />
           <div>
             <h3 className='font-bold text-pink-500 mt-2'>{productDetails.productName}</h3>    
                <h3  className=' mt-2'>Price :${productDetails.price}</h3>    
                <h3  className=' mt-2'>Brand Name :{productDetails.brandName}</h3>    
                <h3  className=' mt-2'>Type : {productDetails.category}</h3>    
                <h3  className=' mt-2'>Rating : {productDetails.rating}</h3> 
                <h3  className=' mt-2 '>Product details : {productDetails.productDetails}</h3> 
                <button onClick={() => handleMyCart(productDetails._id)} className='btn btn-warning px-16 mt-3'>add to cart</button>
            </div> 
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;