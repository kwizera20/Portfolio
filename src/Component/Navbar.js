import React from 'react'
import Logo from '../logo.jpg';
const Navbar = () => {
    return (
      <nav  className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
      <a  className="navbar-brand" href="#"><img src={Logo} className="logo" alt="Logo..."/></a>
      <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon bg-light"></span>
      </button>
      <div  className="collapse navbar-collapse" id="navbarNav">
        <ul  className="navbar-nav">
          <li  className="nav-item active">
            <a  className="nav-link" href="#">Home</a>
          </li>
          <li  className="nav-item">
            <a  className="nav-link" href="#">About</a>
          </li>
          <li  className="nav-item">
            <a  className="nav-link" href="#">My Skills</a>
          </li>
          <li  className="nav-item">
            <a  className="nav-link" href="#">Services</a>
          </li>
          <li  className="nav-item">
            <a  className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    )
  }

export default Navbar
