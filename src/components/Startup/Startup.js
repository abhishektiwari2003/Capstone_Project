import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStartups } from '../../Actions/StartupAction';
import { StartupComponent } from './StartupComponent';
import { Link } from 'react-router-dom';


export const Startup = () => {
    const startups = useSelector(state => state.startup.data.startups);
    console.log(startups);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllStartups())
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className='px-4'>
                <h1 className='text-center m-2'>STARTUPS</h1>
                <Link className='text-danger m-3' to="/AddNewStartup"> Add your own startup by clicking here</Link>
                <div className='d-flex align-items-center overflow-y-auto'>
                    {
                        startups &&
                        (startups).map(({ name, email, phone, startupName, industry, city, startupLogo }) => (
                            <StartupComponent key={Math.random()} name={name} email={email} phone={phone} startupName={startupName} industry={industry} city={city} startupLogo={startupLogo} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
