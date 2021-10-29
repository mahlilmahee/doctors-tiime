import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../Component/images/logo.jpg';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  const buttonStyle={ fontWeight: "bold", color: "red" ,textDecoration:"none", textSize:'1.3rem'};
// activeStyle={}
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
  <Navbar.Brand href="#home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    

    <div class="collapse navbar-collapse d-flex me-1" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink  className="nav-link2" to="/home"  >Home </NavLink>
        </li>
        <li class="nav-item">
        <NavLink  className="nav-link2"  to="/manageorders" >My Orders </NavLink>
        </li>
        <li class="nav-item">
        <NavLink  className="nav-link2" to="/admin" > Manage Orders</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link2"  to="/login" >  Login</NavLink>
        </li>
        
          </ul>
    </div>
  </div>


</nav>

        </div>
    );
};

export default Header;