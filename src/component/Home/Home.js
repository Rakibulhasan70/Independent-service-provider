import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Header/Services/Services';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-4 mb-4 text-primary project-title'>Welcome To My Gym Center</h1>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;