import React from 'react';

const AddProduct = () => {
    const handleNewProductAdd = event =>{
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

        const productInfo = {brandName,productName,rating,price,category,productDetails,brandImage,productImage}

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
                  alert('product added successfully in database')
              }
         })
    }
    return (
        <div>
            <div className='w-[60%] m-auto my-20 bg-gray-200 text-center'>
             <h3 className='text-2xl font-bold p-3'>Add New Product</h3>
            <form onSubmit={handleNewProductAdd} className='p-10'>
                <div className='grid grid-cols-2 gap-5'>
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='brand name' name="brandName" id="" />
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='product name' name="productName" id="" />
                <input className='py-2 pl-2 rounded-sm' type='number' placeholder='rating' name="rating" id="" />
                <input className='py-2 pl-2 rounded-sm' type="number" required placeholder='product price' name="price" id="" />
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='category' name="category" id="" />
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='product details' name="details" id="" />
                </div>
                <input className='w-full my-3 py-2 pl-2 rounded-sm' type="text" required placeholder='product image link here' name="productImage" id="" /> 
                <input className='w-full mb-5 py-2 pl-2 rounded-sm' type="text" required placeholder='brand image link here' name="brandImage" id="" /> 
                <input className='w-full cursor-pointer bg-pink-500 text-white py-2 font-bold rounded-sm' type="submit" value="Add Product" />
            </form>
        </div>
        </div>
    );
};

export default AddProduct;