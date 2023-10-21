import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
    const updateProduct = useParams()
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch('https://e-commerce-server-side-psi.vercel.app/product')
        .then(res => res.json())
        .then(data =>{
            const product = data.find(product => product._id === updateProduct.id)
             setProduct(product) 
        })
    },[])

    const handleUpdatedProduct = event =>{
        event.preventDefault()
        const form = event.target
        const brandName = form.brandName.value
        const productName = form.productName.value
        const rating = form.rating.value
        const price = form.price.value
        const type = form.type.value
        const productDetails = form.details.value
        const brandImage =  form.brandImage.value
        const productImage = form.productImage.value

        const updatedProductInfo = {brandName,productName,rating,price,type,productDetails,brandImage,productImage}


        fetch(`https://e-commerce-server-side-psi.vercel.app/product/${updateProduct.id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProductInfo)
            
        })
        .then(res=> res.json())
        .then(data =>{
            if (data.acknowledged) {
                toast("product successfully updated.please check your product")        
            }
        })
    }
    
    return (
        <div>
            <div className='lg:w-[60%] m-auto md:w-[70%] w-full md:my-[185px] lg:my-10  bg-gray-200'>
             <h3 className='text-2xl text-red-500 font-bold p-3 text-center'>Product updated form</h3>
             <form onSubmit={handleUpdatedProduct} className='px-5 py-5'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.brandName}  type="text" required placeholder='brand name' name="brandName" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.productName}  type="text" required placeholder='product name' name="productName" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.rating}  type='number' placeholder='rating' name="rating" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.price}  type="number" required placeholder='product price' name="price" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.type}  type="text" required placeholder='type' name="type" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.productDetails}  type="text" required placeholder='product details' name="details" id="" />
                </div>
                <input className='w-full my-3 py-2 pl-2 rounded-sm' type="text"  defaultValue={product.productImage} required placeholder='product image link here' name="productImage" id="" /> 
                <input className='w-full mb-5 py-2 pl-2 rounded-sm' type="text"  defaultValue={product.brandImage} required placeholder='brand image link here' name="brandImage" id="" /> 
                <input className='w-full cursor-pointer bg-red-500 text-white py-2 font-bold rounded-sm' type="submit" value="update Product" />
            </form> 
            </div>  
            <ToastContainer/>   
        </div>
    );
};

export default UpdateProduct;