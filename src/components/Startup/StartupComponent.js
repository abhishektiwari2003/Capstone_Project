import React from 'react';
// import { Link } from 'react-router-dom'


export const StartupComponent = ({ name, email, phone, startupName, industry, city, startupLogo }) => {
    return (
        <>
            <div className="col-md-3 col-12">
                <div className="m-2 p-2">
                    <img src={`http://localhost:4000/public/${startupLogo}`} style={{ height: "300px" }} alt="StartupLogo" className='col-12' />
                    <div className='mt-2'>
                        <h5 className='text-danger'>
                            {startupName}
                        </h5>
                        <p className='mb-2'> <strong> Found By -  {name} ( {phone} )</strong> </p>
                        <p className='mb-2'> <strong> Field of Area -  {industry}</strong> </p>
                        <p className='mb-2'> <strong> Location -  {city}</strong> </p>
                    </div>
                </div>
            </div>
        </>
    )
}
