import React from 'react';
import './Footer.css'
import google from '../../images/social/google.png'
import facebook from '../../images/social/facebook.png'
import github from '../../images/social/github.png'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <div>
                <p className='text-center  '><small>Copyright @ {year}</small></p>
            </div>
            <div className='footer-icon'>
                <p className='ps-2'>Conatct me</p>
                <img src={google} alt="" />
                <img height='20' src={facebook} alt="" />
                <img height='25' src={github} alt="" />
            </div>
        </div>
    );
};

export default Footer;