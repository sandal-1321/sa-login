import React, { useState, useEffect } from 'react';
import '../static/compo2.css'
import logo from '../img/logo.jpg'
import imges from '../img/userid.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from "react-router-dom";
import country from './country.json';
import axios from 'axios';

function Compo2() {



    // phoneState


    const [valid, setValid] = useState(true);
    const [load, setLoad] = useState(false);
    const [countries, setCountries] = useState(country);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        let finds = countries.forEach((coun) => {
            if (coun.country_name == selectedCountry) {
                setStates(coun.states)
            }
        })

        setTimeout(() => {
            setLoad(true)
        }, 6000)
    })


    // server state
    const [mobile, setMobile] = useState('')
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        addres: '',
        add: '',
        country: '',
        state: '',
        pincode: '',
    });

    console.log(input)

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoad(false)
        let { fname, lname, email, addres, add2, country, state, pincode } = input;
        console.log(addres, add2)
        axios.post('http://localhost:8000/creatuser', { fname: fname, lname: lname, email: email, mobile: mobile, address: addres, address2: add2, country: country, state: state, pincode: pincode })
        clearInputFields();
    };
    const clearInputFields = () => {
        setMobile('');
        setInput({
            fname: '',
            lname: '',
            email: '',
            addres: '',
            add2: '',
            country: '',
            state: '',
            pincode: ''
        });
    };
    const capature = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
        setSelectedCountry(event.target.value)
    }
    const capatur = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
        setSelectedCountry(event.target.value)
    }
    return (
        <div className='main'>
            <div className='sect2-nav'>
                <div className='nav-1'>
                    <img src={logo}></img>
                    <h1>Novelti</h1>
                </div>
                <div className='nav-2'>
                    <Link to={'/'}><i class="fa-solid fa-backward"></i></Link >
                </div>

            </div>

            <section2>
                <div className='sect2'>
                    <div className='sect2-1'>
                        <div className='sect2-2'>
                            <h2>Web Creation</h2>
                            <img src={imges}></img>
                        </div>
                        <div className='sect2-3'>
                            <div className='sect2-3-1'>
                                <h2>Create User Id</h2>
                            </div>
                            <div className='sect2-3-2'>
                                <form>
                                    <div className='sect2-3-2-1'>
                                        <div className='sect2-3-2-2'>
                                            <label for='fname'> First Name </label>
                                            <input type='text' name='fname' value={input.fname} id='finame' onChange={capature} placeholder='Enter First Name'></input>
                                            <span id='ferr'></span>
                                        </div>
                                        <div className='sect2-3-2-2'>
                                            <label for='lname'> Last Name </label>
                                            <input type='text' name='lname' value={input.lname} id='laname' onChange={capature} placeholder='Enter Last Name'></input>
                                            <span id='lerr'></span>
                                        </div>
                                    </div>
                                    <div className='sect2-3-2-1'>
                                        <div className='sect2-3-2-2'>
                                            <label for='email'> Email </label>
                                            <input type='email' value={input.email} name='email' id='mail' onChange={capature} placeholder='Enter Email'></input>
                                            <span id='eerr'></span>
                                        </div>
                                        <div className='sect2-3-2-2 '>
                                            <label for='mobile' className='mobilab'> Mobile Number </label>
                                            <div>
                                                <PhoneInput
                                                    name='mobile'
                                                    className="phone"
                                                    value={mobile}
                                                    country={'in'}
                                                    onChange={(value) => { setMobile(value) }}
                                                    countryCodeEditable={false}
                                                />
                                            </div>
                                            {!valid && (
                                                <span id='merr'>Please enter valid number.</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className='sect2-3-2-1'>
                                        <div className='sect2-3-2-2'>
                                            <label for='addres'> Address </label>
                                            <input type='text' value={input.addres} name='addres' id='addres' onChange={capature} placeholder='Enter Addres'></input>
                                            <span id='aerr'></span>
                                        </div>
                                        <div className='sect2-3-2-2'>
                                            <label for='add2'> Address </label>
                                            <input type='text' value={input.add2} name='add2' id='add2' onChange={capature} placeholder='Enter Addres'></input>
                                            <span id='aderr'></span>
                                        </div>
                                    </div>
                                    <div className='sect2-3-2-1 csz'>
                                        <div className='sect2-3-2-2'>

                                            <select value={input.country}
                                                name='country' className='coun'
                                                onChange={capatur}>
                                                <option>Select a country</option>
                                                {countries.map(count => (
                                                    <option value={count.country_name}>{count.country_name}</option>
                                                ))}
                                            </select>
                                            <span id='cerr'></span>
                                        </div>
                                        <div className='sect2-3-2-2'>

                                            <select value={input.state}
                                                onChange={capature}
                                                name='state' className='sta'>
                                                <option >Select a state</option>
                                                {states.map((st) => (
                                                    <option value={st.state_name}>{st.state_name}</option>
                                                ))}
                                            </select>

                                            <span id='serr'></span>
                                        </div>
                                        <div className='pin'>
                                            <input type='tel' value={input.pincode} onChange={capature} maxlength={6} name='pincode' id='zip' placeholder='Enter Zip Code'></input>
                                            <span id='zerr'></span>
                                        </div>
                                    </div>
                                    <div className='btn'>
                                        {!load ? (<button className='butt' onClick={handleSubmit}>Submited...</button>) : <button className='butt' onClick={handleSubmit}>Submit</button>}

                                    </div>
                                </form>
                            </div>
                            <div className='sect2-3-3'></div>
                        </div>
                    </div>
                </div >
            </section2 >
        </div >
    );
}

export default Compo2;