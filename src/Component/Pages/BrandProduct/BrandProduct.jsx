import { useLoaderData, useParams } from "react-router-dom";

const BrandProduct = () => {

 const brandProduct = useLoaderData()

      

    return (
        <div className='my-10 lg:w-[80%] w-[90%] m-auto'>
             <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                 {
                    brandProduct.map(product => 
                           <div key={product._id} className='bg-gray-100 py-3 rounded-md cursor-pointer'>
                          <div className="flex lg:flex-row flex-col gap-5 mx-3">
                          <img className='w-[220px] m-auto h-[250px]'  src={product.productImage} alt="" srcset="" />
                          <div>
                          <h3  className=' font-bold text-pink-500 mt-2'>{product.productName}</h3>    
                           <h3  className=' mt-2'>Price :${product.price}</h3>    
                           <h3  className=' mt-2'>Brand Name :{product.brandName}</h3>    
                           <h3  className=' mt-2'>Type : {product.category}</h3>    
                           <h3  className=' mt-2'>Rating : {product.rating}</h3>   
                           <button  className="w-full btn btn-primary">Product Details</button> 
                           <button className="w-full my-2 btn btn-warning">Update Product</button>
                          </div>
                          </div>
                    </div>
                        )
                 }
             </div>
        </div>
    );
};

export default BrandProduct;