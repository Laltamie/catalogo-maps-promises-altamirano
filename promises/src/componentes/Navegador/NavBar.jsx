import React from "react";
import "./navBar.css"
import logo from "../../assets/images/logo.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    
    return (
        <div className="container">
            <ul className="col-logo  nav justify-content-center"><img className="nav-logo img-fluid" src={logo} alt="logo"/></ul>
            <ul className="nav justify-content-center">
                
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            <ul className="nav justify-content-center">
              <a href=""><CartWidget/></a>    
            </ul>
        <hr />
        </div>
    );
};

export default NavBar;