import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const UpdateProduct = () => {
    const updateProduct = useParams()
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
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
        const category = form.category.value
        const productDetails = form.details.value
        const brandImage =  form.brandImage.value
        const productImage = form.productImage.value

        const updatedProductInfo = {brandName,productName,rating,price,category,productDetails,brandImage,productImage}


        fetch(`http://localhost:5000/product/${updateProduct.id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProductInfo)
            
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
        })
    }
    
    return (
        <div>
            <div className='w-[60%] m-auto my-20 bg-gray-200 text-center'>
             <h3 className='text-2xl font-bold p-3'>Product updated form</h3>
             <form onSubmit={handleUpdatedProduct} className='p-10'>
                <div className='grid grid-cols-2 gap-5'>
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.brandName}  type="text" required placeholder='brand name' name="brandName" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.productName}  type="text" required placeholder='product name' name="productName" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.rating}  type='number' placeholder='rating' name="rating" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.price}  type="number" required placeholder='product price' name="price" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.category}  type="text" required placeholder='category' name="category" id="" />
                <input className='py-2 pl-2 rounded-sm' defaultValue={product.productDetails}  type="text" required placeholder='product details' name="details" id="" />
                </div>
                <input className='w-full my-3 py-2 pl-2 rounded-sm' type="text"  defaultValue={product.productImage} required placeholder='product image link here' name="productImage" id="" /> 
                <input className='w-full mb-5 py-2 pl-2 rounded-sm' type="text"  defaultValue={product.brandImage} required placeholder='brand image link here' name="brandImage" id="" /> 
                <input className='w-full cursor-pointer bg-pink-500 text-white py-2 font-bold rounded-sm' type="submit" value="update Product" />
            </form> 
            </div>     
        </div>
    );
};

export default UpdateProduct;