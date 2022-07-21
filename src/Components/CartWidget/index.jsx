import React from "react";
import { useCartContext } from "../../context/CartContext";
import './cart.css'

export const CartWidget = () => {
    const {  totalProducts } = useCartContext();

    return (    
        <>
            <i className="bi bi-cart4"></i>
            <span>{totalProducts() || ''}</span>
        </>
    );
}

export default CartWidget;