import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Jetdrivex() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
            <div className="Jetdrivex">
            <div className="lopm">
<img className='img-1' src="https://user-images.githubusercontent.com/111320610/187564699-9146651c-c48f-4e7b-9d2b-df59fde989ea.jpg"></img>
<br />
<a className="p-home" href="https://t.me/jetdrive">تلگرام jetdrive</a>
</div>
<br />
<p className="p-home">جت درایو ایکس ساده و راحت هست و خیلی امن 
معمولاً کسانی از این استفاده می کنند که نمی خواهند فایل هایشان کسی ببیند .</p>
            </div>
            
         )
            }
export default Jetdrivex;