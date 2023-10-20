import React from 'react';
import Brand from '../Brand/Brand';
import Banner from '../Banner/Banner';

import LatestProduct from '../LatestProduct/LatestProduct';
import ChooseUs from '../ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div className='lg:w-[90%] w-[95%] m-auto'>
            <Banner></Banner>
            <LatestProduct></LatestProduct>
            <Brand></Brand>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;