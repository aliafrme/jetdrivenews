import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Jetdrivex from "./Jetdrivex";
import Home from "./Home";
import Aboutjetdrive from "./Aboutjetdrive";




function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
    <header>
    <nav class="img-2">
    
     <img style={{ width: 40+"px",}} className="img" src="https://user-images.githubusercontent.com/111320610/188438837-a0281e39-879a-4c70-8756-37268b5e3e3d.jpg"></img>
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"></a>
      </li>
    </ul>
        <Link to="/Aboutjetdrive">Jetdrive</Link>
         <br />

    
         <Link to="/Jetdrivex">Jetdrive x</Link>
   
  
  </div>
</nav>
<hr />
<div ca>
<Button variant="dark" onClick={handleShow} className="navbar-button">
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor: "0b0b0b" ,}}>
        <Offcanvas.Header closeButton style={{backgroundColor: "0b0b0b" ,}}>
        
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Link to="/" style={{ textDecoration: 'none' , color: '#fcaf17'}}>Home</Link>
         <br />
         <br />
         <Link to="/Aboutjetdrive" style={{ textDecoration: 'none' , color: '#fcaf17'}}>Jetdrive</Link>
         <br />
         <br /> 
         <Link to="/Jetdrivex" style={{ textDecoration: 'none' , color: '#fcaf17'}}>Jetdrive x</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </header>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Aboutjetdrive" element={<Aboutjetdrive />} />
        <Route path="Jetdrivex" element={<Jetdrivex />} />
      </Routes>


   
    </div>
  );
}

export default App;
