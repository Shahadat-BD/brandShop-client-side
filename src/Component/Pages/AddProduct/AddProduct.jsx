import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
    const handleNewProductAdd = event =>{
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

        const productInfo = {brandName,productName,rating,price,type,productDetails,brandImage,productImage}
        console.log(productInfo);
         fetch('http://localhost:5000/product',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(productInfo)
         })
         .then(res=> res.json())
         .then(data => {
              if (data.acknowledged) {
                  toast('product successfully added in database')
              }
         })
    }
    return (
        <div>
            <div className='lg:w-[60%] m-auto md:w-[70%] w-full md:my-[185px] lg:my-10  bg-gray-200'>
             <h3 className='text-2xl text-red-500 font-bold p-3 text-center'>Add New Product</h3>
            <form onSubmit={handleNewProductAdd} className='px-5 py-5'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                <input className='py-2 pl-2  rounded-sm' type="text" required placeholder='brand name' name="brandName" id="" />
                <input className='py-2 pl-2  rounded-sm' type="text" required placeholder='product name' name="productName" id="" />
                <input className='py-2 pl-2  rounded-sm' type='number' placeholder='rating' name="rating" id="" />
                <input className='py-2 pl-2  rounded-sm' type="number" required placeholder='product price' name="price" id="" />
                <input className='py-2 pl-2  rounded-sm' type="text" required placeholder='type' name="type" id="" />
                <input className='py-2 pl-2  rounded-sm' type="text" required placeholder='product details' name="details" id="" />
                </div>
                <input className='w-full my-3 py-2 pl-2  rounded-sm' type="text" required placeholder='product image link here' name="productImage" id="" /> 
                <input className='w-full mb-5 py-2 pl-2  rounded-sm' type="text" required placeholder='brand image link here' name="brandImage" id="" /> 
                <input className='w-full cursor-pointer bg-red-500 text-white py-2 font-bold rounded-sm' type="submit" value="Add Product" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default AddProduct;