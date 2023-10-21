import { Link, useLoaderData} from "react-router-dom";

const BrandProduct = () => {

 const brandProduct = useLoaderData()

    return (
        <div className='my-10 lg:w-[80%] w-[90%] m-auto'>
             <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                 {
                    brandProduct.map(product => 
                           <div key={product._id} className='bg-gray-100 py-3 rounded-md'>
                          <div className="flex lg:flex-row flex-col gap-5 mx-3">
                          <img className='lg:w-[250px] m-auto md:w-full md:h-[200px] lg:h-[200px] rounded-md'  src={product.productImage} alt="" srcset="" />
                          <div className="w-4/5">
                          <h3  className=' font-bold text-lg text-red-500 mt-2'>{product.productName}</h3>       
                           <h3  className=' mt-2 text-gray-500 font-semibold'>Brand Name : <span className="text-black font-bold">{product.brandName}</span> </h3>    
                           <h3  className=' mt-2 text-gray-500 font-semibold'>Type:{product.type}</h3>  
                           <div className="flex items-center">
                                <h3  className=' text-gray-500 font-semibold mt-2 flex-1'>Price :${product.price}</h3> 
                                <h3  className=' text-gray-500 font-semibold mt-2'>Rating : {product.rating}</h3> 
                            </div>    
                             <div className="flex items-center gap-3">
                                    <Link className="flex-1" to={`/productDetails/${product._id}`}> <button className="w-full py-3 rounded-md bg-red-500 hover:bg-none text-white">Details</button> </Link>
                                    <Link to={`/update-product/${product._id}`}><button className="w-full my-2 btn btn-warning">Update</button></Link>
                             </div>
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