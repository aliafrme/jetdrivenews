import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Aboutjetdrive() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return (
<div className="Aboutjetdrive">
<div className="lopm">
<img className='img-1' src="https://user-images.githubusercontent.com/111320610/187565098-c1250c40-6ae5-4790-8cfd-7244dd318ef5.jpg"></img>
<br />
<a className="p-home" href="https://t.me/jetdrive">تلگرام jetdrive</a>
</div>
<br />
<p className="p-home">جت درایو یک فضای ابری است که برای گزاشتن عکس و فیلم متن و برنامه... 
استفاده می شود</p>

</div>

    )
}
export default Aboutjetdrive;
