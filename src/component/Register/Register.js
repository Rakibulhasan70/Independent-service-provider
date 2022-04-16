import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordBlur = e => {
        setconfirmPassword(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div className='register-form'>
            <h2 className='mt-3 mb-3 text-primary' style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="text" id="" placeholder='Your name' />
                <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Address' required />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" placeholder='Confirm Password' required />

                <input
                    style={{ height: '40px' }} className='btn btn-primary w-50 mx-auto d-block text-white '
                    type="submit"
                    value="Register" />

            </form>
            <p>Already have an account? <Link to={'/login'} className='text-primary text-decoration-none' >Please Login</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;