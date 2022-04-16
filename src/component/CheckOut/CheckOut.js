import { useParams } from 'react-router-dom';


const CheckOut = () => {
    const { serviceId } = useParams()

    return (
        <div>
            <h2>Show individual service:{serviceId}</h2>
        </div>
    );
};

export default CheckOut;