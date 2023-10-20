import React from 'react';
import watch from "../../../assets/product/watch.jpg";
import headPhone from "../../../assets/product/headphone.jpg";
import mobile from "../../../assets/product//mobile.jpg";
import laptop from "../../../assets/product/laptop.jpg";
const LatestProduct = () => {
    return (
        <div>
                <h1 className='font-bold lg:text-3xl text-2xl lg:text-left md:text-left text-center my-5'>Our <span className='text-red-500'>Best Selling</span> Product</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                <div>
                <img className='h-[250px] w-full rounded-md' src={watch} alt="" srcset="" />
                <p className='absolute -mt-60 font-bold px-3 py-1 rounded-full ml-2  bg-[#F7D524]'>10% off</p>
                <p className='text-white -mt-11 lg:w-[295px] md:w-[360px] w-[95%] rounded-b-md text-center py-[10px] absolute bg-red-500'>Digital Watch</p>
                </div>
                <div>
                <img className='h-[250px] w-full rounded-md' src={headPhone} alt="" srcset="" />
                <p className='absolute -mt-60 font-bold px-3 py-1 rounded-full ml-2  bg-[#F7D524]'>20% off</p>
                <p className='text-white -mt-11 lg:w-[295px] md:w-[360px] w-[95%] rounded-b-md text-center py-[10px] absolute bg-red-500'>Head Phone</p>
                </div>
               <div>
               <img className='h-[250px] w-full rounded-md' src={mobile} alt="" srcset="" />
                <p className='absolute -mt-60 font-bold px-3 py-1 rounded-full ml-2  bg-[#F7D524]'>15% off</p>
                <p className='text-white -mt-11 lg:w-[295px] md:w-[360px] w-[95%] rounded-b-md text-center py-[10px] absolute bg-red-500'>Ipone Pro</p>
               </div>
               <div>
               <img className='h-[250px] w-full rounded-md' src={laptop} alt="" srcset="" />
                <p className='absolute -mt-60 font-bold px-3 py-1 rounded-full ml-2  bg-[#F7D524]'>22% off</p>
                <p className='text-white -mt-11 lg:w-[295px] md:w-[360px] w-[95%] rounded-b-md text-center py-[10px] absolute bg-red-500'>Mackbook Pro</p>
               </div>
            </div>
        </div>
    );
};

export default LatestProduct;