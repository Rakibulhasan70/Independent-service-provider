import React from 'react';
import profile from '../../images/profile/profile.png'
import './About.css'

const About = () => {
    return (
        <div className='container about'>
            <div>
                <p>My name is Sohag.Now i want to tell you what is my goal in near future.
                    First of all i always want to be a good person.Becasuse your job,business or passion can not define your personality.But your honesty,well behaviour are define you.
                    But i have a alternative goal which is i want to be a good senior web developer.I love coding, i love pogramming.InshaaAllah i will do it.
                </p>
            </div>
            <div className='about-img'>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default About;