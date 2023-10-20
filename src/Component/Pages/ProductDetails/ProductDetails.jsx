import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';

const ProductDetails = () => {
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
        const category = productAllInfo.category
        const productDetails = productAllInfo.productDetails
        const brandImage =  productAllInfo.brandImage
        const productImage = productAllInfo.productImage

        const myProductCart = {brandName,productName,rating,price,category,productDetails,brandImage,productImage}
    
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
 }

    return (
        <div className='flex my-10 lg:w-[70%] m-auto'>
        <div>
            <div className='flex gap-5 lg:flex-row md:flex-row flex-col'>
            <img className='w-[300px] h-[300px]'  src={productAllInfo.productImage} alt="" srcset="" />
           <div>
             <h3 className='font-bold text-pink-500 mt-2'>{productAllInfo.productName}</h3>    
                <h3  className=' mt-2'>Price :${productAllInfo.price}</h3>    
                <h3  className=' mt-2'>Brand Name :{productAllInfo.brandName}</h3>    
                <h3  className=' mt-2'>Type : {productAllInfo.category}</h3>    
                <h3  className=' mt-2'>Rating : {productAllInfo.rating}</h3> 
                <h3  className=' mt-2 '>Product details : {productAllInfo.productDetails}</h3> 
                <button onClick={() => handleMyCart(productAllInfo._id)} className='btn btn-warning px-16 mt-3'>add to cart</button>
            </div> 
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;