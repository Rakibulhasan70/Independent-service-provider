import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import './CheckOut.css'


const CheckOut = () => {
    const { serviceId } = useParams()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleSubmitButton = async () => {
        if (user) {
            toast('Thank You For Checkout')
        }
        else {
            toast('please enter your authentic information')
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        signInWithEmailAndPassword(email, password)

    }



    return (
        <div>
            <div className='container'>
                <form onSubmit={handleFormSubmit} className='checkout-form mt-3'>
                    <h2 className='text-center mb-3'>Please give the information</h2>
                    <input type="text" name="name" id="" placeholder='Your name' required />
                    <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' />
                    <br />
                    <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder='Password' required />
                    <br />
                    <input type="text" name="" id="" placeholder='Address' />
                    <br />
                    <input type="number" name="" id="" placeholder='Contact Number' />
                    <br />
                    <input onClick={handleSubmitButton} style={{ height: '40px' }} className='btn btn-primary w-60 mx-auto d-block text-white ' type="submit" value="checkout" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CheckOut;