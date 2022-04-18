import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (

        <div id='services'>
            <div>
                <h2 style={{ color: 'purple' }} className='mt-5 mb-5 text-center title'>My Services</h2>
                <div className='container services'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;