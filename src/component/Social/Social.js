import React from 'react';
import google from '../../images/social/google.png'

const Social = () => {

    return (
        <div>
            <button
                className='btn btn-info w-50 mx-auto d-block my-2'>
                <img src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default Social;