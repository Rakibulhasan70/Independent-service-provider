import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <p className='text-center mt-5 '><small>Copyright @ {year}</small></p>
        </div>
    );
};

export default Footer;