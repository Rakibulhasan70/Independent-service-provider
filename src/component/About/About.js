import React from 'react';
import profile from '../../images/profile/profile.png'
import './About.css'

const About = () => {
    return (
        <div className='container about'>
            <div>
                <p>My name is Rakibul Hasan Sohag. I'm a Student. I'm doing a Bachelor's Degree in Chemistry. But I also love coding. During the Corona Pandemic, I learned about Programming and I also tried to learn some basic languages of programming, such as HTML and CSS. Unexpectedly, One day I saw the post of Jhanker vaiya about the course of Web development. And I took my decision for doing the course. so far I have learned HTML,  CSS, Bootstrap, Java, API and React. My dream is to become a Senior Web Developer And work with Microsoft company. I believe in hard work. If anyone works hard with patience One-day Insha-Allah he can reach his goal.
                </p>
            </div>
            <div className='about-img'>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default About;