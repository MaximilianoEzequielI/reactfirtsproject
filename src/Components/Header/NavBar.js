import React from "react"
import logo from '../../assets/logo.png'
import CartWidget from "../CartWidget"

// import carritoo from '../../assets/carritoo.png'
import './Header.css'

const NavBar = () => {  
    return (    
        <header>
            <img src={logo} alt="" />
            <nav>   
                <a className="cat1" href="123">Inicio </a>
                <a href="123">Productos </a>
                <a className="cart3" href="123">Servicio </a>
                <a className="login" href="123">Login</a>
            </nav>
            <a href="123">    
                <CartWidget />
            </a>
        </header>
    )
}

export default NavBar