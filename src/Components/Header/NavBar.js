import React from "react"
import logo from '../../assets/logo.png'
import CartWidget from "../CartWidget"
import { NavLink } from 'react-router-dom';

// import carritoo from '../../assets/carritoo.png'
import './Header.css'

const NavBar = () => {  
    return (    
        <header>
            <img src={logo} alt="" />
            <nav>   
                <NavLink className="cat1" to='/'>Inicio </NavLink>
                <NavLink className="cat2" to='/productos/optical'>Optical </NavLink>
                <NavLink className="cat2" to='/productos/pulseras'>Pulseras </NavLink>
                <NavLink className="cat1" to='/productos/relojes'>Relojes</NavLink>
            </nav>
            <NavLink to='cart'>    
                <CartWidget />
            </NavLink>
        </header>
    )
}

export default NavBar