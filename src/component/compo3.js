import React, { useState, useEffect } from 'react';
import '../static/compo3.css';
import logo from '../img/logo.jpg'
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import axios from 'axios';



// material ul
import Button from '@mui/material/Button';
import { styled, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, DialogContentText, } from '@mui/material';
import e from 'express';





function Compo3() {

    // matrial ui

    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState();

    const handleOpenDialog = (selectedUserData) => {
        setSelectedUser(selectedUserData);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        viow()
    })

    // server side

    const [alluser, setalluser] = useState([]);

    let viow = async () => {
        let find = await axios.get('http://localhost:8000/view');
        setalluser(find.data);
    }
    let handleDelete = (id) => {
        axios.delete(`http://localhost:8000/deleteuser/${id}`)
            .then(res => console.log("ok"))
            .catch(err => console.log("err"))
    }
    return (
        <div className="sec5">
            <div className='sect2-nav'>
                <div className='nav-1 com3-nav'>
                    <img src={logo}></img>
                    <h1>Novelti</h1>
                </div>
                <div className='nav-2'>
                    <Link to={'/'}><i class="fa-solid fa-backward"></i></Link >
                </div>
            </div>
            <div className="sec5-1">
                <div className="sec5-2">
                    <div className="sec5-3"><h2>User Create List</h2></div>
                    <div className="sec5-4">
                        <ul className='ul'>
                            {alluser && alluser.map((pep, index) => (
                                <li className='list'>
                                    <div className="sec5-4-1">
                                        <i class="fa-solid fa-user-secret"></i>
                                        <div className="sec5-4-1-1">
                                            <div className="sec5-4-1-2"><label>Name : </label>  <p> {pep.fname} {pep.lname}</p></div>
                                            <div className="sec5-4-1-3"><label>Email : </label>  <p>  {pep.email}</p></div>
                                        </div>
                                    </div>
                                    <div className="sec5-4-2">
                                        <Tooltip title="View User" placement="top" arrow>
                                            <div onClick={() => handleOpenDialog(pep)} className="sec5-4-2-1"><i class="fa-solid fa-eye"></i></div>
                                        </Tooltip>
                                        <Tooltip title="Delete" placement="top" arrow>
                                            <div className="sec5-4-2-2" onClick={() => handleDelete(index)}><i class="fa-solid fa-trash"></i></div>
                                        </Tooltip>
                                    </div>
                                </li>
                            ))}

                        </ul>
                        {selectedUser && (
                            <Dialog open={open} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
                                <div className='dia-a'>
                                    <DialogTitle id='dialog-title'><p> User Id <span>: {selectedUser.id}</span> </p></DialogTitle>
                                    <DialogActions>
                                        <Button onClick={handleClose}><i class="fa-regular fa-circle-xmark"></i></Button>
                                    </DialogActions>
                                </div>
                                <DialogContent>
                                    <DialogContentText id='dialog-description' className='dcont'>
                                        <div className='sname'>
                                            <p>Full Name <span>: {selectedUser.fname} {selectedUser.lname} </span></p>
                                        </div>
                                        <div className='smail'>
                                            <p>Email Id <span>: {selectedUser.email} </span></p>
                                        </div>
                                        <div className='smobi'>
                                            <p>Mobile <span>: {selectedUser.mobile}</span></p>
                                        </div>
                                        <div className='sadd'>
                                            <p>Address <span>: {selectedUser.address}</span></p>
                                        </div>
                                        {selectedUser && selectedUser.address2 ? (
                                            <div className='sadd2'>
                                                <p>Address2 <span>: {selectedUser.address2}</span></p>
                                            </div>
                                        ) : (
                                            <div style={{ display: "none" }} className='sadd2'>
                                                <p>Address2 <span>: {selectedUser ? selectedUser.address2 : ''}</span></p>
                                            </div>
                                        )}

                                        <div className='scou'>
                                            <p>Country <span className='count'>: {selectedUser.country}</span></p>
                                            <p>State <span className='st'>: {selectedUser.state}</span></p>
                                            <p>Pin Code <span className='pi'>: {selectedUser.pincode}</span></p>
                                        </div>
                                    </DialogContentText>
                                </DialogContent>
                                <div className='butns-ed'>
                                    <Button>Edite</Button>
                                    <Button>Submit</Button>
                                </div>
                            </Dialog>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Compo3;

