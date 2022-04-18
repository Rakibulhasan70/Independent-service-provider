import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../images/social/google.png'
import github from '../../images/social/github.png'
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // githuib login
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);


    const navigate = useNavigate()
    if (user || githubUser) {
        navigate('/home')
    }
    if (loading || githubLoading) {
        <Loading></Loading>
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info  mx-auto d-block my-2'>
                <img src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>

            <button
                onClick={() => signInWithGithub()}
                className='btn btn-info  mx-auto d-block my-2'>
                <img src={github} alt="" />
                <span className='px-2'>Github Sign In</span>
            </button>
        </div>
    );
};

export default Social;