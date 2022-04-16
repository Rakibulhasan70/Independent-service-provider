import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2 mb-2'>Please Login</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
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