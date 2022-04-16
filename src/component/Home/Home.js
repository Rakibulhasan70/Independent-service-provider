import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Header/Services/Services';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-primary mt-4 mb-4'>Welcome to My Gym center</h1>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;