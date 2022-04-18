import { useParams } from 'react-router-dom';
import './CheckOut.css'


const CheckOut = () => {
    const { serviceId } = useParams()

    return (
        <div>
            <div className='container'>
                <form className='checkout-form mt-3'>
                    <h2 className='text-center mb-3'>Please give the information</h2>
                    <input type="text" name="name" id="" placeholder='Your name' required />
                    <br />
                    <input type="email" name="email" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Password' required />
                    <br />
                    <input type="text" name="" id="" placeholder='Address' />
                    <br />
                    <input type="number" name="" id="" placeholder='Contact Number' />
                    <br />
                    <input style={{ height: '40px' }} className='btn btn-primary w-60 mx-auto d-block text-white ' type="submit" value="checkout" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;