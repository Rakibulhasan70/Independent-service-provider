import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }


    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2 mb-2'>Please Login</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            <p>New to Genius Car? <Link to={'/register'} className='text-primary text-decoration-none'>Please Register</Link></p>

            <p>Forget Password? <button className=' btn btn-link text-primary text-decoration-none' >Reset Password</button></p>
            <Social></Social>
        </div>
    );
};

export default Login;