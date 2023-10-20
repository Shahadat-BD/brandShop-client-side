import React from 'react';
import banner from '../../../assets/images/baner.png'
const Banner = () => {
    return (
        <div className='my-3'>
            <div className='flex lg:flex-row md:flex-row flex-col items-center justify-around'>
                <div>
                     <h3 className='lg:text-6xl text-3xl font-bold'>Welcome to<br /> <span className='text-red-500'>online brand shop</span></h3>
                     <p className='lg:w-4/5 mt-4 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ducimus delectus beatae ut. Veritatis porro quisquam ea culpa tempore.</p>
                     <button className='btn bg-red-500 text-white mt-5'>Order Now</button> 
                </div>
                <img className='lg:w-[650px] lg:h-[550px] w-[350px] h-[280x]' src={banner} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Banner;