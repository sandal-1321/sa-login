import React from 'react';
import '../static/compo1.css';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from '../img/logo.jpg'
import use from '../img/use.png'
import list from '../img/list.png'
import img3 from '../img/img3.webp'
import img4 from '../img/img4.png'



function Compo1() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <section1>
                <div className='sec1'>
                    <div className='sec2'>
                        <sec1 className='sec2-1'>
                            <div className='sec2-1-1'><p>Design Creative Application That Works...</p></div>
                            <Slider {...settings} className='fade'>
                                <img className='imges' src={img3}></img>
                                <img src={img4}></img>
                            </Slider>
                        </sec1>
                        <sec2 className='sec2-2'>
                            <img src={logo}></img>
                            <h2>Novelti</h2>
                            <p>Explore Create & Develop</p>
                            <div className='sec2-3'>
                                <Link to={'/createuser'}>
                                    <div className='sec2-3-1'>
                                        <img src={use}></img>
                                        <p>Create User</p>
                                    </div>
                                </Link >
                                <Link to={'/viewuser'}>
                                    <div className='sec2-3-2'>
                                        <img src={list}></img>
                                        <p>View User List</p>
                                    </div>
                                </Link>
                            </div>
                        </sec2>
                    </div>
                </div >
            </section1 >
        </div >
    );
}

export default Compo1;