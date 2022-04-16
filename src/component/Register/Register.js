import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <h2 className='mt-3 mb-3 text-primary' style={{ textAlign: 'center' }}>Please Register</h2>
            <form >
                <input type="text" name="text" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Your Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
            </form>
            <p>Already have an account? <Link to={'/login'} className='text-primary text-decoration-none' >Please Login</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;