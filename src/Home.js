import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
       
<div className="Home">

<h2 className='h2'>اخبار جت درایو</h2>
<p className="p-home">جت درایو یک فضای ابری است که برای گزاشتن عکس و فیلم متن و برنامه... 
استفاده می شود</p>
</div>

    )
}
export default Home;