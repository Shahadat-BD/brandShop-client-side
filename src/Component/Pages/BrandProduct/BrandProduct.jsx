import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const BrandProduct = () => {
  const brandProduct = useLoaderData();
  const [advertise,setAdvertise]= useState([])
 
  useEffect(()=>{
    fetch('/advertise.json')
    .then(res => res.json())
    .then(data =>{
        const brandName = brandProduct.find(brandName => brandName.brandName)
        const filterAdvertiseImage =  data.filter(advertise => advertise.brandName === brandName.brandName)
        setAdvertise(filterAdvertiseImage)
        console.log(filterAdvertiseImage);
    })
  },[])

  return (
    <div className="my-10 lg:w-[80%] w-[90%] m-auto">
  
        {
            advertise.map(advertiseImage => <>
               <div className="carousel w-full mb-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={advertiseImage.image1} className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={advertiseImage.image2} className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={advertiseImage.image3} className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
            </>)
        }

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        {brandProduct.map((product) => (
          <div key={product._id} className="bg-gray-100 py-3 rounded-md">
            <div className="flex lg:flex-row flex-col gap-5 mx-3">
              <img
                className="lg:w-[250px] m-auto md:w-full md:h-[200px] lg:h-[200px] rounded-md"
                src={product.productImage}
                alt=""
                srcset=""
              />
              <div className="w-4/5">
                <h3 className=" font-bold text-lg text-red-500 mt-2">
                  {product.productName}
                </h3>
                <h3 className=" mt-2 text-gray-500 font-semibold">
                  Brand Name :{" "}
                  <span className="text-black font-bold">
                    {product.brandName}
                  </span>{" "}
                </h3>
                <h3 className=" mt-2 text-gray-500 font-semibold">
                  Type:{product.type}
                </h3>
                <div className="flex items-center">
                  <h3 className=" text-gray-500 font-semibold mt-2 flex-1">
                    Price :${product.price}
                  </h3>
                  <h3 className=" text-gray-500 font-semibold mt-2">
                    Rating : {product.rating}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    className="flex-1"
                    to={`/productDetails/${product._id}`}
                  >
                    {" "}
                    <button className="w-full py-3 rounded-md bg-red-500 hover:bg-none text-white">
                      Details
                    </button>{" "}
                  </Link>
                  <Link to={`/update-product/${product._id}`}>
                    <button className="w-full my-2 btn btn-warning">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
