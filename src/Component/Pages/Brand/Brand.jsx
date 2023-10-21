// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Brand = () => {
    const [brand,setBrand] = useState([])
    useEffect(()=>{
        fetch('https://e-commerce-server-side-psi.vercel.app/product')
        .then(res => res.json())
        .then(data =>{
            setBrand(data.slice(0,6))
        })
    },[])

 
    
    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-3xl mb-10 '>Explore <span className='text-red-500'>Brand Shop</span></h2>
             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                 {
                    brand.map(brand => 
                     <Link to={`/product/${brand.brandName}`}>
                           <div key={brand._id} className='bg-red-50 py-3 rounded-md cursor-pointer'>
                           <img className='w-[60%] m-auto h-[100px]'  src={brand.brandImage} alt="" srcset="" />
                           <h3  className='text-center text-2xl font-bold bg-red-500 text-white mx-10 rounded-md py-2 mt-5'>{brand.brandName}</h3>    
                    </div>
                     </Link>
                        )
                 }
             </div>
        </div>
    );
};

export default Brand;