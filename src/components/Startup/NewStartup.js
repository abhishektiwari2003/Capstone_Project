import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const NewStartup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [startupName, setStartupName] = useState("");
    const [phone, setPhone] = useState("");
    const [industry, setIndustry] = useState("");
    const [city, setCity] = useState("");
    const [startupLogo, setStartupLogo] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleStartupNameChange = (e) => {
        setStartupName(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleIndustryChange = (e) => {
        setIndustry(e.target.value);
    };
    const handleCityChange = (e) => {
        setCity(e.target.value);
    };
    //Base64 file-
    // const handleStartupLogoChange = (e) => {
    //     // setStartupLogo(e.target.value);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         // console.log(reader.result); //base 64 encoded string 
    //         setStartupLogo(reader.result);
    //     };
    //     reader.onerror = (error) => {
    //         console.log(error);
    //     }
    // };
    const handleStartupLogoChange = (e) => {
        let x = e.target.value.slice(12);
        setStartupLogo(x);
    }
    const submitBtn = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line
            const response = await axios.post('http://localhost:4000/startup/addNewStartup', { name, email, startupName, phone, industry, city, startupLogo }, { headers: { "Content-Type": "multipart/form-data" } });
            navigate("/startups");
        }
        catch (error) {
            alert("Error occurred while adding your startup");
        }
    }
    return (
        <div className=''>
            <h2 className='text-center mt-4'>Fill out this form to add your own startup to our showcase </h2>
            <form onSubmit={submitBtn} className='shadow rounded p-5 m-5'>
                <div className='row justify-content-center '>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="name" className="form-label">Founder Name</label>
                        <input onChange={handleNameChange} value={name} required type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={handleEmailChange} value={email} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                </div>
                <div className='row justify-content-center mt-4'>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="startupName" className="form-label">Startup Name</label>
                        <input onChange={handleStartupNameChange} value={startupName} required type="text" className="form-control" id="startupName" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input onChange={handlePhoneChange} value={phone} required type="text" className="form-control" id="phone" />
                    </div>
                </div>
                <div className='row justify-content-center mt-4'>
                    <div className="mb-1 col-md-5">
                        <label htmlFor="Industry" className="form-label">Industry</label>
                        <input onChange={handleIndustryChange} value={industry} required type="text" className="form-control" id="Industry" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="City" className="form-label">City</label>
                        <input onChange={handleCityChange} value={city} required type="text" className="form-control" id="City" />
                    </div>
                </div>
                <div className="custom-file my-4" style={{ marginLeft: "8.5%" }}>
                    <input name='startupLogo' onChange={handleStartupLogoChange} type="file" className="custom-file-input" id="startupLogo" accept="image/*" />
                    <label className="custom-file-label" htmlFor="startupLogo">Choose Startup Logo</label>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
