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
            <div>
                <h5>Information</h5>
                About us
                <br />
                More Search
                <br />
                Blog
                <br />
                Testimonial
            </div>
            <div>
                <h5>Helpful Links</h5>
                Service
                <br />
                Support
                <br />
                Terms and Conditions
                <br />
                Privacy
            </div>
            <div className='footer-icon'>
                <h5 className='ps-2'>Conatct me</h5>
                <img src={google} alt="" />
                <img height='20' src={facebook} alt="" />
                <img height='25' src={github} alt="" />
                <p className='mt-1'>rakibulhasansohag5@gmail.com</p>
                <p className='mt-0'>01790139036</p>
            </div>
        </div>
    );
};

export default Footer;